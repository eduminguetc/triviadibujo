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

// Configuración del juego actualizada
const QUESTIONS_PER_GAME = 40;
const MIN_QUESTIONS_PER_UNIT = 5; // Actualizado
const TOTAL_UNITS = 8;

// Variables de estado del juego
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let lastGameQuestionIds = [];

// Elementos del DOM (sin cambios en la asignación)
let startScreen, gameScreen, endScreen;
let startGameBtn, nextQuestionBtn, playAgainBtn;
let questionCounter, scoreCounter;
let questionTextContainerDOM, questionTextElem;
let optionsWrapperDOM, optionsContainer;
let explanationContainer, explanationTitle, explanationTextElem;
let correctAnswersFinal, incorrectAnswersFinal;
let errorMessageContainer;

function assignDOMelements() {
    startScreen = document.getElementById('start-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');
    startGameBtn = document.getElementById('start-game-btn');
    nextQuestionBtn = document.getElementById('next-question-btn');
    playAgainBtn = document.getElementById('play-again-btn');
    questionCounter = document.getElementById('question-counter');
    scoreCounter = document.getElementById('score-counter');
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lógica de selección de preguntas ACTUALIZADA
function selectNewQuestions() {
    console.log("Selecting new questions. Total available:", allQuestions.length);
    console.log("Last game IDs:", lastGameQuestionIds);

    const questionsByUnit = {};
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        questionsByUnit[i] = allQuestions.filter(q => q.unit === i);
    }

    // Validación inicial: ¿Hay suficientes preguntas por unidad?
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        if (!questionsByUnit[i] || questionsByUnit[i].length < MIN_QUESTIONS_PER_UNIT) {
            const availableCount = questionsByUnit[i] ? questionsByUnit[i].length : 0;
            const errorMsg = `No hay suficientes preguntas en la unidad ${i}. Se necesitan ${MIN_QUESTIONS_PER_UNIT} y solo hay ${availableCount}.`;
            console.error(errorMsg);
            return { error: errorMsg };
        }
    }

    // Validación inicial: ¿Hay suficientes preguntas en total para el mínimo garantizado?
    const totalMinGuaranteedNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS; // 5 * 8 = 40
    if (allQuestions.length < totalMinGuaranteedNeeded) {
        const errorMsg = `No hay suficientes preguntas en total (${allQuestions.length}) para cumplir el mínimo garantizado de ${totalMinGuaranteedNeeded} (5 por unidad).`;
        console.error(errorMsg);
        return { error: errorMsg };
    }
    
    // El número de preguntas por partida será QUESTIONS_PER_GAME (40)
    // o el total de preguntas disponibles si es menor que 40 pero cumple el mínimo garantizado.
    // Dado que QUESTIONS_PER_GAME es ahora 40 y totalMinGuaranteedNeeded también es 40,
    // si allQuestions.length < 40, ya se habría retornado error.
    // Así que actualQuestionsPerGame será siempre QUESTIONS_PER_GAME (40) si pasamos las validaciones.
    const actualQuestionsPerGame = QUESTIONS_PER_GAME;


    let selectedQuestions = [];
    let selectedIds = new Set();

    // 1. Garantizar representación mínima por unidad (MIN_QUESTIONS_PER_UNIT = 5)
    console.log("Step 1: Guaranteeing minimum questions per unit.");
    for (let unit = 1; unit <= TOTAL_UNITS; unit++) {
        let unitQuestionsPool = shuffleArray([...questionsByUnit[unit]]); // Copia mezclada para esta unidad
        let countForThisUnit = 0;

        // Intento 1: Preguntas no en lastGameQuestionIds y no seleccionadas aún
        for (const question of unitQuestionsPool) {
            if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
            if (!lastGameQuestionIds.includes(question.id) && !selectedIds.has(question.id)) {
                selectedQuestions.push(question);
                selectedIds.add(question.id);
                countForThisUnit++;
            }
        }
        
        // Intento 2: Si no se alcanzó el mínimo, permitir de lastGameQuestionIds (pero no seleccionadas aún)
        if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
            console.log(`Unit ${unit}: Attempt 1 yielded ${countForThisUnit}. Need ${MIN_QUESTIONS_PER_UNIT - countForThisUnit} more. Allowing from lastGameQuestionIds.`);
            for (const question of unitQuestionsPool) {
                if (countForThisUnit >= MIN_QUESTIONS_PER_UNIT) break;
                if (!selectedIds.has(question.id)) { // Ya no filtramos por lastGameQuestionIds aquí
                    selectedQuestions.push(question);
                    selectedIds.add(question.id);
                    countForThisUnit++;
                }
            }
        }
        console.log(`Unit ${unit}: Selected ${countForThisUnit} questions.`);
        // La validación inicial ya asegura que hay suficientes preguntas en cada unidad.
    }
    console.log("Questions after unit guarantee:", selectedQuestions.length, selectedQuestions.map(q=>q.id));


    // 2. Completar aleatoriamente hasta actualQuestionsPerGame (40)
    let remainingQuestionsNeeded = actualQuestionsPerGame - selectedQuestions.length;
    console.log(`Step 2: Need to complete ${remainingQuestionsNeeded} more questions.`);

    if (remainingQuestionsNeeded > 0) {
        // Pool 1: Preguntas no seleccionadas aún Y NO en lastGameQuestionIds
        let pool1 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id) && !lastGameQuestionIds.includes(q.id)));
        console.log(`Pool 1 (not in selected, not in last game): ${pool1.length} questions.`);
        for (const question of pool1) {
            if (remainingQuestionsNeeded <= 0) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
            remainingQuestionsNeeded--;
        }
        console.log(`After Pool 1: ${selectedQuestions.length} questions selected. Remaining needed: ${remainingQuestionsNeeded}`);

        // Pool 2: Si aún faltan, preguntas no seleccionadas aún (pueden estar en lastGameQuestionIds)
        if (remainingQuestionsNeeded > 0) {
            let pool2 = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id)));
            console.log(`Pool 2 (not in selected, can be in last game): ${pool2.length} questions.`);
            for (const question of pool2) {
                if (remainingQuestionsNeeded <= 0) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
                remainingQuestionsNeeded--;
            }
            console.log(`After Pool 2: ${selectedQuestions.length} questions selected. Remaining needed: ${remainingQuestionsNeeded}`);
        }
    }
    
    // 3. Mezcla Final y Verificación de Cantidad
    // Si después de los intentos, no se alcanzan las actualQuestionsPerGame (40),
    // es un problema si el total de allQuestions es >= 40.
    // Si allQuestions.length es < 40, ya se habría manejado.
    // Como totalMinGuaranteedNeeded es 40, y actualQuestionsPerGame es 40,
    // selectedQuestions.length debería ser 40 en este punto.

    if (selectedQuestions.length < actualQuestionsPerGame) {
        const errorMsg = `No se pudieron seleccionar ${actualQuestionsPerGame} preguntas. Solo se obtuvieron ${selectedQuestions.length}. Revise la lógica o el banco de preguntas.`;
        console.error(errorMsg);
        // Esto indica un problema si allQuestions.length >= actualQuestionsPerGame
        // Si allQuestions.length < actualQuestionsPerGame, la lógica debería haber ajustado actualQuestionsPerGame.
        // Dado que actualQuestionsPerGame ahora es fijo en 40 (y validado al inicio),
        // llegar aquí con menos de 40 significa un fallo en la lógica de llenado o una condición no prevista.
        return { error: errorMsg };
    }
    
    currentQuestions = shuffleArray(selectedQuestions.slice(0, actualQuestionsPerGame)); 
    console.log("Final selected questions for the game:", currentQuestions.length, currentQuestions.map(q=>q.id));
    
    return { questions: currentQuestions };
}


// Función para mostrar la pregunta actual (sin cambios)
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionTextElem.textContent = question.questionText;
    optionsContainer.innerHTML = ''; 

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

    if (questionTextContainerDOM && optionsWrapperDOM) {
        questionTextContainerDOM.style.animation = 'none';
        optionsWrapperDOM.style.animation = 'none';
        void questionTextContainerDOM.offsetWidth; 
        void optionsWrapperDOM.offsetWidth; 
        questionTextContainerDOM.style.animation = 'fadeInElement 0.5s ease-out forwards';
        optionsWrapperDOM.style.animation = 'fadeInElement 0.5s ease-out forwards';
    }
}

// Manejar clic en una opción (sin cambios)
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

// Actualizar contador de puntuación (sin cambios)
function updateScoreCounter() {
    scoreCounter.textContent = `Aciertos: ${score} | Fallos: ${incorrectAnswers}`;
}

// Iniciar el juego (con validación actualizada)
function startGame() {
    console.log("Attempting to start game...");
    errorMessageContainer.textContent = ''; 

    if (allQuestions.length === 0) {
        console.error("Error crítico: El banco de preguntas 'allQuestions' está vacío.");
        errorMessageContainer.textContent = "Error: No hay preguntas cargadas. El juego no puede iniciar.";
        return;
    }
    // La validación de si hay suficientes preguntas por unidad y en total se hace ahora dentro de selectNewQuestions.

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
    
    // Validar si se obtuvieron preguntas
    if (!currentQuestions || currentQuestions.length === 0 ) {
         const msg = `No se pudieron cargar preguntas para iniciar la partida. Verifique el banco de preguntas y la lógica de selección.`;
        console.error(msg);
        errorMessageContainer.textContent = msg;
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        return;
    }
    // Validar si se alcanzó el número de preguntas esperado para la partida
    if (currentQuestions.length < QUESTIONS_PER_GAME && allQuestions.length >= QUESTIONS_PER_GAME) {
        const msg = `Se esperaban ${QUESTIONS_PER_GAME} preguntas, pero solo se seleccionaron ${currentQuestions.length}.`;
        console.error(msg);
        errorMessageContainer.textContent = msg;
        // Podríamos decidir no iniciar el juego aquí si es un error crítico.
        // Por ahora, se iniciará con las que se tengan, pero es un signo de problema en selectNewQuestions.
    }


    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    
    updateScoreCounter(); // Actualizar contadores antes de mostrar la primera pregunta
    displayQuestion();

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    endScreen.classList.add('hidden');
    console.log(`Game started with ${currentQuestions.length} questions.`);
}

// Ir a la siguiente pregunta (sin cambios)
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Finalizar el juego (sin cambios)
function endGame() {
    correctAnswersFinal.textContent = score;
    incorrectAnswersFinal.textContent = incorrectAnswers;
    lastGameQuestionIds = currentQuestions.map(q => q.id); 
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    console.log("Game ended. Last game IDs set:", lastGameQuestionIds);
}

// Reiniciar el juego (sin cambios)
function playAgain() {
    startGame();
}

// Inicialización (con validación actualizada)
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

    // Validación temprana en la carga de la página
    const minTotalGuaranteed = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS;
    let initialErrorMsg = "";

    for (let i = 1; i <= TOTAL_UNITS; i++) {
        const unitQs = allQuestions.filter(q => q.unit === i);
        if (unitQs.length < MIN_QUESTIONS_PER_UNIT) {
            initialErrorMsg += `Unidad ${i} tiene solo ${unitQs.length} preguntas (necesita ${MIN_QUESTIONS_PER_UNIT}). `;
        }
    }

    if (allQuestions.length < QUESTIONS_PER_GAME) {
         initialErrorMsg += `Total de preguntas (${allQuestions.length}) es menor que las ${QUESTIONS_PER_GAME} deseadas por partida. `;
    }
     if (allQuestions.length < minTotalGuaranteed) { // Esta es la condición más crítica para no poder iniciar
        initialErrorMsg += `El total de preguntas (${allQuestions.length}) es menor que el mínimo garantizado de ${minTotalGuaranteed} ( ${MIN_QUESTIONS_PER_UNIT} por ${TOTAL_UNITS} unidades). El juego no puede iniciar.`;
        startGameBtn.disabled = true; // Deshabilitar botón de inicio
        startGameBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }


    if (initialErrorMsg && errorMessageContainer) {
        errorMessageContainer.textContent = "Advertencia: " + initialErrorMsg.trim();
        console.warn(initialErrorMsg);
    }

    if (startScreen && gameScreen && endScreen) {
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
    } else {
        console.error("Error: Las pantallas principales no se encontraron en el DOM.");
    }
});
