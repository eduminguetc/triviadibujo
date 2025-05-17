// index.js

// Importar preguntas de todos los módulos de unidades
import { unit1Questions } from './unit1_questions.js';
import { unit2Questions } from './unit2_questions.js';
import { unit3Questions } from './unit3_questions.js';
import { unit4Questions } from './unit4_questions.js';
import { unit5Questions } from './unit5_questions.js';
import { unit6Questions } from './unit6_questions.js';
import { unit7Questions } from './unit7_questions.js';
import { unit8Questions } from './unit8_questions.js';

// Combinar todas las preguntas en un solo array
const allQuestions = [
    ...unit1Questions,
    ...unit2Questions,
    ...unit3Questions,
    ...unit4Questions,
    ...unit5Questions,
    ...unit6Questions,
    ...unit7Questions,
    ...unit8Questions
];

// Configuración del juego
const QUESTIONS_PER_GAME = 25;
const MIN_QUESTIONS_PER_UNIT = 3;
const TOTAL_UNITS = 8;

// Variables de estado del juego
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let lastGameQuestionIds = []; // IDs de las preguntas de la partida anterior

// Elementos del DOM
let startScreen, gameScreen, endScreen;
let startGameBtn, nextQuestionBtn, playAgainBtn;
let questionCounter, scoreCounter;
let questionCard, questionTextElem;
let optionsContainer;
let explanationContainer, explanationTitle, explanationTextElem;
let correctAnswersFinal, incorrectAnswersFinal;
let errorMessageContainer;

// Función para asignar elementos del DOM
function assignDOMelements() {
    startScreen = document.getElementById('start-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');
    
    startGameBtn = document.getElementById('start-game-btn');
    nextQuestionBtn = document.getElementById('next-question-btn');
    playAgainBtn = document.getElementById('play-again-btn');
    
    questionCounter = document.getElementById('question-counter');
    scoreCounter = document.getElementById('score-counter');
    
    questionCard = document.getElementById('question-card');
    questionTextElem = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    
    explanationContainer = document.getElementById('explanation-container');
    explanationTitle = document.getElementById('explanation-title');
    explanationTextElem = document.getElementById('explanation-text');
    
    correctAnswersFinal = document.getElementById('correct-answers-final');
    incorrectAnswersFinal = document.getElementById('incorrect-answers-final');
    errorMessageContainer = document.getElementById('error-message-container');

    console.log("DOM elements assigned:", { startGameBtn, nextQuestionBtn, playAgainBtn });
}

// Función para mezclar un array (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lógica de selección de preguntas
function selectNewQuestions() {
    console.log("Selecting new questions. Total available:", allQuestions.length);
    console.log("Last game IDs:", lastGameQuestionIds);

    const questionsByUnit = {};
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        questionsByUnit[i] = allQuestions.filter(q => q.unit === i);
    }

    // Validar si hay suficientes preguntas
    let totalMinQuestionsNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS; // 3 * 8 = 24

    for (let i = 1; i <= TOTAL_UNITS; i++) {
        if (!questionsByUnit[i] || questionsByUnit[i].length < MIN_QUESTIONS_PER_UNIT) {
            const availableCount = questionsByUnit[i] ? questionsByUnit[i].length : 0;
            console.error(`Insuficientes preguntas en la unidad ${i}. Necesarias: ${MIN_QUESTIONS_PER_UNIT}, Disponibles: ${availableCount}`);
            return { error: `No hay suficientes preguntas en la unidad ${i}. Se necesitan ${MIN_QUESTIONS_PER_UNIT} y solo hay ${availableCount}.` };
        }
    }
    
    if (allQuestions.length < QUESTIONS_PER_GAME) {
         console.error(`Insuficientes preguntas en total para una partida completa. Necesarias: ${QUESTIONS_PER_GAME}, Disponibles: ${allQuestions.length}. Se jugará con ${allQuestions.length} preguntas.`);
         // No retornamos error aquí, permitiremos jugar con menos si el mínimo por unidad se cumple y el total es menor a QUESTIONS_PER_GAME
    }


    let selectedQuestions = [];
    let selectedIds = new Set();

    // 1. Garantizar representación mínima por unidad
    for (let unit = 1; unit <= TOTAL_UNITS; unit++) {
        let unitQuestionsPool = questionsByUnit[unit] || [];
        let countForThisUnit = 0;
        
        // Priorizar preguntas no jugadas recientemente y no seleccionadas ya
        let preferredUnitQuestions = shuffleArray(unitQuestionsPool.filter(q => !lastGameQuestionIds.includes(q.id) && !selectedIds.has(q.id)));
        
        for (const question of preferredUnitQuestions) {
            if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
            countForThisUnit++;
        }

        // Si no se alcanzó el mínimo, intentar con preguntas ya jugadas pero no seleccionadas
        if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
            let lessPreferredUnitQuestions = shuffleArray(unitQuestionsPool.filter(q => !selectedIds.has(q.id))); // Incluye las de lastGameQuestionIds
            for (const question of lessPreferredUnitQuestions) {
                if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
                countForThisUnit++;
            }
        }
         if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
            // Esto no debería pasar si la validación inicial fue correcta.
            console.error(`Error crítico: No se pudieron seleccionar ${MIN_QUESTIONS_PER_UNIT} para la unidad ${unit} a pesar de la validación.`);
            return { error: `Error al seleccionar preguntas para la unidad ${unit}.`};
        }
    }
    console.log("Questions after unit guarantee:", selectedQuestions.length, selectedQuestions.map(q=>q.id));


    // 2. Completar aleatoriamente hasta QUESTIONS_PER_GAME (o el total disponible si es menor)
    const targetQuestionCount = Math.min(QUESTIONS_PER_GAME, allQuestions.length);
    let remainingQuestionsNeeded = targetQuestionCount - selectedQuestions.length;

    if (remainingQuestionsNeeded > 0) {
        // Prioridad 1: Preguntas no seleccionadas y no en lastGameQuestionIds
        let generalPool1 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id) && !lastGameQuestionIds.includes(q.id)));
        
        for (const question of generalPool1) {
            if (selectedQuestions.length >= targetQuestionCount) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
        }

        // Prioridad 2: Si aún faltan, tomar de las preguntas restantes no seleccionadas (podrían estar en lastGameQuestionIds)
        if (selectedQuestions.length < targetQuestionCount) {
            let generalPool2 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id)));
             for (const question of generalPool2) {
                if (selectedQuestions.length >= targetQuestionCount) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
            }
        }
    }
    console.log("Questions after random fill:", selectedQuestions.length, selectedQuestions.map(q=>q.id));

    // 3. Mezcla Final
    currentQuestions = shuffleArray(selectedQuestions.slice(0, targetQuestionCount)); 
    console.log("Final selected questions for the game:", currentQuestions.length, currentQuestions.map(q=>q.id));
    
    // Validación final de cantidad de preguntas para la partida
    if (currentQuestions.length < totalMinQuestionsNeeded && currentQuestions.length < allQuestions.length) {
         return { error: `No se pudo conformar un set de ${totalMinQuestionsNeeded} preguntas válidas. Solo ${currentQuestions.length} disponibles.` };
    }
     if (currentQuestions.length === 0 && allQuestions.length > 0) {
        return { error: `No se seleccionaron preguntas. Verifique la lógica de selección.` };
    }
    
    return { questions: currentQuestions };
}


// Función para mostrar la pregunta actual
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionTextElem.textContent = question.questionText;
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Mezclar opciones de respuesta para esta pregunta
    const shuffledOptions = question.options.map((option, originalIndex) => ({ text: option, originalIndex }));
    shuffleArray(shuffledOptions);


    shuffledOptions.forEach(optionObj => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = optionObj.text;
        // Guardamos el índice original para saber si es la correcta, no el índice mezclado
        button.dataset.originalIndex = optionObj.originalIndex; 
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });

    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    explanationContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    
    optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = false);

    questionCard.style.animation = 'none';
    optionsContainer.style.animation = 'none';
    void questionCard.offsetWidth; 
    void optionsContainer.offsetWidth; 
    questionCard.style.animation = 'fadeInCard 0.5s ease-out forwards';
    optionsContainer.style.animation = 'fadeInCard 0.5s ease-out forwards';
}

// Manejar clic en una opción
function handleOptionClick(event) {
    const selectedOptionButton = event.target;
    const selectedAnswerOriginalIndex = parseInt(selectedOptionButton.dataset.originalIndex);
    const question = currentQuestions[currentQuestionIndex];

    optionsContainer.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
        // Resaltar la correcta siempre
        if (parseInt(btn.dataset.originalIndex) === question.correctAnswerIndex) {
            btn.classList.add('correct-answer');
        }
    });

    const isCorrect = selectedAnswerOriginalIndex === question.correctAnswerIndex;

    if (isCorrect) {
        score++;
        // selectedOptionButton ya está resaltado por el bucle anterior si es la correcta
        explanationTitle.textContent = "¡Respuesta Correcta!";
        explanationTitle.className = 'font-bold text-lg mb-2 text-green-700';
    } else {
        incorrectAnswers++;
        selectedOptionButton.classList.add('selected-incorrect'); // Resaltar la incorrecta seleccionada
        explanationTitle.textContent = "Respuesta Incorrecta";
        explanationTitle.className = 'font-bold text-lg mb-2 text-red-700';
    }

    explanationTextElem.textContent = question.explanation;
    explanationContainer.classList.remove('hidden');
    nextQuestionBtn.classList.remove('hidden');
    updateScoreCounter();
}

// Actualizar contador de puntuación
function updateScoreCounter() {
    scoreCounter.textContent = `Aciertos: ${score} | Fallos: ${incorrectAnswers}`;
}

// Iniciar el juego
function startGame() {
    console.log("Attempting to start game...");
    errorMessageContainer.textContent = ''; 

    if (allQuestions.length === 0) {
        console.error("Error crítico: El banco de preguntas 'allQuestions' está vacío. Asegúrate de que los módulos de preguntas se importan correctamente y exportan los arrays.");
        errorMessageContainer.textContent = "Error: No hay preguntas cargadas. El juego no puede iniciar.";
        return;
    }

    const questionSelectionResult = selectNewQuestions();

    if (questionSelectionResult.error) {
        console.error("Error selecting questions:", questionSelectionResult.error);
        errorMessageContainer.textContent = questionSelectionResult.error;
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        return;
    }
    
    currentQuestions = questionSelectionResult.questions;
    
    if (!currentQuestions || currentQuestions.length === 0 ) {
         const minNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS;
         const msg = `No se pudieron cargar suficientes preguntas para iniciar la partida. Se necesitan al menos ${minNeeded} preguntas válidas y se obtuvieron ${currentQuestions ? currentQuestions.length : 0}.`;
        console.error(msg);
        errorMessageContainer.textContent = msg;
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    
    updateScoreCounter();
    displayQuestion();

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    endScreen.classList.add('hidden');
    console.log("Game started with questions:", currentQuestions.map(q => q.id));
}

// Ir a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Finalizar el juego
function endGame() {
    correctAnswersFinal.textContent = score;
    incorrectAnswersFinal.textContent = incorrectAnswers;
    
    lastGameQuestionIds = currentQuestions.map(q => q.id); 

    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    console.log("Game ended. Last game IDs set:", lastGameQuestionIds);
}

// Reiniciar el juego
function playAgain() {
    startGame();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    assignDOMelements();

    if (!startGameBtn || !nextQuestionBtn || !playAgainBtn) {
        console.error("Error: No se pudieron asignar todos los botones del DOM. Verifica los IDs en HTML.");
        if(errorMessageContainer) errorMessageContainer.textContent = "Error crítico: No se pudieron cargar los componentes de la interfaz. Intenta recargar la página.";
        return;
    }
    
    startGameBtn.addEventListener('click', startGame);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    playAgainBtn.addEventListener('click', playAgain);
    
    console.log("Event listeners assigned.");
    console.log("Total questions loaded initially:", allQuestions.length);

    if (allQuestions.length < MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS) {
        const msg = `Advertencia: Hay solo ${allQuestions.length} preguntas en total. Se necesitan al menos ${MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS} para garantizar la diversidad entre unidades según las reglas. El juego podría no funcionar como se espera o mostrar errores de insuficiencia.`;
        console.warn(msg);
        if(errorMessageContainer) errorMessageContainer.textContent = msg; // Mostrar en UI
    } else if (allQuestions.length < QUESTIONS_PER_GAME) {
        const msg = `Advertencia: Hay ${allQuestions.length} preguntas en total, menos que las ${QUESTIONS_PER_GAME} deseadas por partida. Se jugará con menos preguntas.`;
        console.warn(msg);
         if(errorMessageContainer) errorMessageContainer.textContent = msg; // Mostrar en UI
    }


    if (startScreen && gameScreen && endScreen) {
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
    } else {
        console.error("Error: Las pantallas principales no se encontraron en el DOM.");
    }
});
