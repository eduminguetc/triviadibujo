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
let questionTextContainerDOM, questionTextElem; // questionTextContainerDOM es el div, questionTextElem es el h2
let optionsWrapperDOM, optionsContainer; // optionsWrapperDOM es el div con fondo blanco, optionsContainer es el grid
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
    
    // Elementos actualizados según el nuevo HTML
    questionTextContainerDOM = document.getElementById('question-text-container');
    questionTextElem = document.getElementById('question-text');
    optionsWrapperDOM = document.getElementById('options-wrapper');
    optionsContainer = document.getElementById('options-container');
    
    explanationContainer = document.getElementById('explanation-container');
    explanationTitle = document.getElementById('explanation-title');
    explanationTextElem = document.getElementById('explanation-text');
    
    correctAnswersFinal = document.getElementById('correct-answers-final');
    incorrectAnswersFinal = document.getElementById('incorrect-answers-final');
    errorMessageContainer = document.getElementById('error-message-container');

    console.log("DOM elements assigned.");
}

// Función para mezclar un array (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lógica de selección de preguntas (igual que la versión anterior)
function selectNewQuestions() {
    console.log("Selecting new questions. Total available:", allQuestions.length);
    console.log("Last game IDs:", lastGameQuestionIds);

    const questionsByUnit = {};
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        questionsByUnit[i] = allQuestions.filter(q => q.unit === i);
    }

    let totalMinQuestionsNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS; 

    for (let i = 1; i <= TOTAL_UNITS; i++) {
        if (!questionsByUnit[i] || questionsByUnit[i].length < MIN_QUESTIONS_PER_UNIT) {
            const availableCount = questionsByUnit[i] ? questionsByUnit[i].length : 0;
            console.error(`Insuficientes preguntas en la unidad ${i}. Necesarias: ${MIN_QUESTIONS_PER_UNIT}, Disponibles: ${availableCount}`);
            return { error: `No hay suficientes preguntas en la unidad ${i}. Se necesitan ${MIN_QUESTIONS_PER_UNIT} y solo hay ${availableCount}.` };
        }
    }
    
    // Ajustar el número de preguntas si el total disponible es menor que QUESTIONS_PER_GAME pero cumple el mínimo por unidad.
    const actualQuestionsPerGame = Math.min(QUESTIONS_PER_GAME, allQuestions.length);
    if (allQuestions.length < QUESTIONS_PER_GAME && allQuestions.length >= totalMinQuestionsNeeded) {
         console.warn(`Se jugará con ${allQuestions.length} preguntas en lugar de ${QUESTIONS_PER_GAME} debido a la disponibilidad total.`);
    } else if (allQuestions.length < totalMinQuestionsNeeded) {
        // Este caso ya está cubierto por la validación de unidad, pero es una doble comprobación.
        return { error: `No hay suficientes preguntas en total (${allQuestions.length}) para cumplir el mínimo requerido de ${totalMinQuestionsNeeded}.` };
    }


    let selectedQuestions = [];
    let selectedIds = new Set();

    // 1. Garantizar representación mínima por unidad
    for (let unit = 1; unit <= TOTAL_UNITS; unit++) {
        let unitQuestionsPool = questionsByUnit[unit] || [];
        let countForThisUnit = 0;
        
        let preferredUnitQuestions = shuffleArray(unitQuestionsPool.filter(q => !lastGameQuestionIds.includes(q.id) && !selectedIds.has(q.id)));
        
        for (const question of preferredUnitQuestions) {
            if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
            countForThisUnit++;
        }

        if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
            let lessPreferredUnitQuestions = shuffleArray(unitQuestionsPool.filter(q => !selectedIds.has(q.id))); 
            for (const question of lessPreferredUnitQuestions) {
                if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
                countForThisUnit++;
            }
        }
         if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
            console.error(`Error crítico: No se pudieron seleccionar ${MIN_QUESTIONS_PER_UNIT} para la unidad ${unit}.`);
            return { error: `Error al seleccionar preguntas para la unidad ${unit}.`};
        }
    }
    console.log("Questions after unit guarantee:", selectedQuestions.length, selectedQuestions.map(q=>q.id));

    // 2. Completar aleatoriamente hasta actualQuestionsPerGame
    let remainingQuestionsNeeded = actualQuestionsPerGame - selectedQuestions.length;

    if (remainingQuestionsNeeded > 0) {
        let generalPool1 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id) && !lastGameQuestionIds.includes(q.id)));
        
        for (const question of generalPool1) {
            if (selectedQuestions.length >= actualQuestionsPerGame) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
        }

        if (selectedQuestions.length < actualQuestionsPerGame) {
            let generalPool2 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id)));
             for (const question of generalPool2) {
                if (selectedQuestions.length >= actualQuestionsPerGame) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
            }
        }
    }
    console.log("Questions after random fill:", selectedQuestions.length, selectedQuestions.map(q=>q.id));
    
    currentQuestions = shuffleArray(selectedQuestions.slice(0, actualQuestionsPerGame)); 
    console.log("Final selected questions for the game:", currentQuestions.length, currentQuestions.map(q=>q.id));
    
    if (currentQuestions.length < totalMinQuestionsNeeded && currentQuestions.length < allQuestions.length && currentQuestions.length > 0) {
        // Si no se alcanza el mínimo total requerido pero hay preguntas, se advierte.
         console.warn(`Se seleccionaron ${currentQuestions.length} preguntas, menos que el mínimo ideal de ${totalMinQuestionsNeeded} pero más que cero.`);
    } else if (currentQuestions.length === 0 && allQuestions.length > 0) {
        return { error: `No se seleccionaron preguntas. Verifique la lógica de selección.` };
    } else if (currentQuestions.length < totalMinQuestionsNeeded && allQuestions.length >= totalMinQuestionsNeeded ) {
         return { error: `No se pudo conformar un set de ${totalMinQuestionsNeeded} preguntas válidas. Solo ${currentQuestions.length} disponibles.` };
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

    const shuffledOptions = question.options.map((option, originalIndex) => ({ text: option, originalIndex }));
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(optionObj => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = optionObj.text;
        button.dataset.originalIndex = optionObj.originalIndex; 
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });

    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    explanationContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    
    optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = false);

    // Reiniciar animación para los contenedores de pregunta y opciones
    if (questionTextContainerDOM && optionsWrapperDOM) {
        questionTextContainerDOM.style.animation = 'none';
        optionsWrapperDOM.style.animation = 'none';
        // Forzar reflow para que la animación se reinicie
        void questionTextContainerDOM.offsetWidth; 
        void optionsWrapperDOM.offsetWidth; 
        questionTextContainerDOM.style.animation = 'fadeInElement 0.5s ease-out forwards';
        optionsWrapperDOM.style.animation = 'fadeInElement 0.5s ease-out forwards';
    }
}

// Manejar clic en una opción
function handleOptionClick(event) {
    const selectedOptionButton = event.target;
    const selectedAnswerOriginalIndex = parseInt(selectedOptionButton.dataset.originalIndex);
    const question = currentQuestions[currentQuestionIndex];

    optionsContainer.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.originalIndex) === question.correctAnswerIndex) {
            btn.classList.add('correct-answer');
        }
    });

    const isCorrect = selectedAnswerOriginalIndex === question.correctAnswerIndex;

    if (isCorrect) {
        score++;
        explanationTitle.textContent = "¡Respuesta Correcta!";
        explanationTitle.className = 'font-bold text-lg mb-2 text-green-700';
    } else {
        incorrectAnswers++;
        selectedOptionButton.classList.add('selected-incorrect');
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
        console.error("Error crítico: El banco de preguntas 'allQuestions' está vacío.");
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
    
    // Si después de la selección, currentQuestions es vacío o no cumple un mínimo absoluto (ej. 1 pregunta)
    if (!currentQuestions || currentQuestions.length === 0 ) {
         const minNeededForAnyGame = 1; // O un valor más alto si se considera inviable jugar con menos
         const msg = `No se pudieron cargar suficientes preguntas para iniciar la partida. Se necesitan al menos ${minNeededForAnyGame} pregunta(s) válida(s) y se obtuvieron ${currentQuestions ? currentQuestions.length : 0}.`;
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
        console.error("Error: No se pudieron asignar todos los botones del DOM.");
        if(errorMessageContainer) errorMessageContainer.textContent = "Error crítico: No se pudieron cargar componentes.";
        return;
    }
    
    startGameBtn.addEventListener('click', startGame);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    playAgainBtn.addEventListener('click', playAgain);
    
    console.log("Event listeners assigned.");
    console.log("Total questions loaded initially:", allQuestions.length);

    const minTotalNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS;
    if (allQuestions.length < minTotalNeeded) {
        const msg = `Advertencia: Hay solo ${allQuestions.length} preguntas. Se necesitan ${minTotalNeeded} para diversidad entre unidades.`;
        console.warn(msg);
        if(errorMessageContainer) errorMessageContainer.textContent = msg;
    } else if (allQuestions.length < QUESTIONS_PER_GAME) {
        const msg = `Advertencia: Hay ${allQuestions.length} preguntas, menos que las ${QUESTIONS_PER_GAME} deseadas. Se jugará con menos.`;
        console.warn(msg);
         if(errorMessageContainer) errorMessageContainer.textContent = msg; 
    }

    if (startScreen && gameScreen && endScreen) {
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
    } else {
        console.error("Error: Las pantallas principales no se encontraron en el DOM.");
    }
});
