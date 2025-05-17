// index.js

// Importar preguntas (esto se hará dinámicamente cuando tengamos los archivos)
// Ejemplo de cómo se importarían (descomentar y adaptar cuando los archivos existan)
/*
import { unit1Questions } from './unit1_questions.js';
import { unit2Questions } from './unit2_questions.js';
import { unit3Questions } from './unit3_questions.js';
import { unit4Questions } from './unit4_questions.js';
import { unit5Questions } from './unit5_questions.js';
import { unit6Questions } from './unit6_questions.js';
import { unit7Questions } from './unit7_questions.js';
import { unit8Questions } from './unit8_questions.js';
*/

// Simulación de datos de preguntas hasta que los módulos estén listos
// ESTO ES TEMPORAL Y DEBE SER REEMPLAZADO
const allQuestions = []; 
// Descomentar esto cuando los módulos estén listos y eliminar el array vacío de arriba
/*
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
*/


// Configuración del juego
const QUESTIONS_PER_GAME = 25;
const MIN_QUESTIONS_PER_UNIT = 3;
const TOTAL_UNITS = 8; // Asumiendo 8 unidades

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
let questionCard, questionTextElem; // Renombrado para evitar conflicto
let optionsContainer;
let explanationContainer, explanationTitle, explanationTextElem; // Renombrado
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
    let totalMinQuestionsNeeded = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS;
    if (allQuestions.length < totalMinQuestionsNeeded || allQuestions.length < QUESTIONS_PER_GAME) {
         for (let i = 1; i <= TOTAL_UNITS; i++) {
            if (questionsByUnit[i].length < MIN_QUESTIONS_PER_UNIT) {
                console.error(`Insuficientes preguntas en la unidad ${i}. Necesarias: ${MIN_QUESTIONS_PER_UNIT}, Disponibles: ${questionsByUnit[i].length}`);
                return { error: `No hay suficientes preguntas en la unidad ${i} para cumplir los requisitos mínimos. Se necesitan ${MIN_QUESTIONS_PER_UNIT} y solo hay ${questionsByUnit[i].length}.` };
            }
        }
        if (allQuestions.length < QUESTIONS_PER_GAME) {
             console.error(`Insuficientes preguntas en total. Necesarias: ${QUESTIONS_PER_GAME}, Disponibles: ${allQuestions.length}`);
            return { error: `No hay suficientes preguntas en total para iniciar una partida de ${QUESTIONS_PER_GAME} preguntas. Solo hay ${allQuestions.length} disponibles.` };
        }
    }


    let selectedQuestions = [];
    let selectedIds = new Set();

    // 1. Garantizar representación mínima por unidad
    for (let unit = 1; unit <= TOTAL_UNITS; unit++) {
        let unitQuestions = questionsByUnit[unit] || [];
        let attempts = 0;
        let countForThisUnit = 0;
        let availableForUnit = shuffleArray([...unitQuestions]); // Copia mezclada

        while (countForThisUnit < MIN_QUESTIONS_PER_UNIT && availableForUnit.length > 0) {
            let questionPool = availableForUnit.filter(q => !lastGameQuestionIds.includes(q.id) && !selectedIds.has(q.id));
            
            if (questionPool.length === 0 && attempts < 2) { // Intento 1: sin repetir de la partida anterior
                // Si no hay nuevas, permitir de la partida anterior para esta unidad si es necesario
                questionPool = availableForUnit.filter(q => !selectedIds.has(q.id));
                attempts++;
            }
            
            if (questionPool.length > 0) {
                const question = questionPool.shift(); // Tomar la primera de la lista mezclada
                if (question) {
                    selectedQuestions.push(question);
                    selectedIds.add(question.id);
                    countForThisUnit++;
                    // Remover la pregunta seleccionada de availableForUnit para no considerarla de nuevo en este bucle
                    availableForUnit = availableForUnit.filter(q => q.id !== question.id);
                } else {
                    break; // No más preguntas válidas en el pool
                }
            } else {
                break; // No más preguntas disponibles para esta unidad
            }
        }
        if (countForThisUnit < MIN_QUESTIONS_PER_UNIT) {
             console.warn(`No se pudieron seleccionar ${MIN_QUESTIONS_PER_UNIT} preguntas únicas para la unidad ${unit}. Seleccionadas: ${countForThisUnit}`);
             // Si aún así no se cumple, se podría permitir repetición forzada, pero la lógica actual prioriza no repetir.
             // Si es crítico cumplir MIN_QUESTIONS_PER_UNIT incluso repitiendo de la misma partida, se añadiría lógica aquí.
             // Por ahora, si no se cumple, el juego podría no ser viable si el total es bajo.
        }
    }
    console.log("Questions after unit guarantee:", selectedQuestions.length, selectedQuestions.map(q=>q.id));


    // 2. Completar aleatoriamente hasta QUESTIONS_PER_GAME
    let remainingQuestionsNeeded = QUESTIONS_PER_GAME - selectedQuestions.length;
    if (remainingQuestionsNeeded > 0) {
        let generalPool = allQuestions.filter(q => !selectedIds.has(q.id));
        
        // Prioridad 1: Preguntas no seleccionadas y no en lastGameQuestionIds
        let priorityPool1 = shuffleArray(generalPool.filter(q => !lastGameQuestionIds.includes(q.id)));
        
        for (const question of priorityPool1) {
            if (selectedQuestions.length >= QUESTIONS_PER_GAME) break;
            selectedQuestions.push(question);
            selectedIds.add(question.id);
        }

        // Prioridad 2: Si aún faltan, tomar de las preguntas restantes (podrían estar en lastGameQuestionIds pero no fueron usadas en garantía)
        if (selectedQuestions.length < QUESTIONS_PER_GAME) {
            let priorityPool2 = shuffleArray(generalPool.filter(q => !selectedIds.has(q.id))); // Re-filtrar por si acaso
             for (const question of priorityPool2) {
                if (selectedQuestions.length >= QUESTIONS_PER_GAME) break;
                selectedQuestions.push(question);
                selectedIds.add(question.id);
            }
        }
    }
    console.log("Questions after random fill:", selectedQuestions.length, selectedQuestions.map(q=>q.id));

    // Si después de todos los intentos no tenemos suficientes preguntas para la partida
    if (selectedQuestions.length < QUESTIONS_PER_GAME) {
        const minViableQuestions = Math.min(QUESTIONS_PER_GAME, totalMinQuestionsNeeded);
        if (selectedQuestions.length < minViableQuestions && selectedQuestions.length < allQuestions.length) {
             console.error(`No se pudieron seleccionar suficientes preguntas (${selectedQuestions.length}/${QUESTIONS_PER_GAME}). Intentando completar con cualquier pregunta disponible no seleccionada.`);
             // Último recurso: completar con cualquier pregunta no seleccionada, incluso si se repite de lastGameQuestionIds
             let finalPool = shuffleArray(allQuestions.filter(q => !selectedIds.has(q.id)));
             for (const question of finalPool) {
                 if (selectedQuestions.length >= QUESTIONS_PER_GAME) break;
                 selectedQuestions.push(question);
                 selectedIds.add(question.id);
             }
        }
        if (selectedQuestions.length < QUESTIONS_PER_GAME && selectedQuestions.length < totalMinQuestionsNeeded) {
            console.error(`Definitivamente no hay suficientes preguntas únicas para una partida válida (${selectedQuestions.length}).`);
            return { error: `No hay suficientes preguntas únicas disponibles para una partida de ${QUESTIONS_PER_GAME}. Solo se pudieron seleccionar ${selectedQuestions.length}.` };
        }
    }


    // 3. Mezcla Final
    currentQuestions = shuffleArray(selectedQuestions.slice(0, QUESTIONS_PER_GAME)); // Asegurarse de no exceder
    console.log("Final selected questions for the game:", currentQuestions.length, currentQuestions.map(q=>q.id));
    
    if (currentQuestions.length < Math.min(QUESTIONS_PER_GAME, totalMinQuestionsNeeded) && currentQuestions.length < allQuestions.length) {
        // Aún no hay suficientes preguntas viables.
        return { error: `No se pudo conformar un set de ${Math.min(QUESTIONS_PER_GAME, totalMinQuestionsNeeded)} preguntas válidas. Solo ${currentQuestions.length} disponibles.` };
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

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-button'); // Clase CSS para Tailwind y estilos base
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });

    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    explanationContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    
    // Re-habilitar botones de opción (aunque se deshabilitan después del clic)
    // Esto es más por si hay una navegación atrás/adelante no implementada
    optionsContainer.querySelectorAll('button').forEach(btn => btn.disabled = false);

    // Animación para la nueva tarjeta
    questionCard.style.animation = 'none';
    optionsContainer.style.animation = 'none';
    void questionCard.offsetWidth; // Trigger reflow
    void optionsContainer.offsetWidth; // Trigger reflow
    questionCard.style.animation = 'fadeInCard 0.5s ease-out forwards';
    optionsContainer.style.animation = 'fadeInCard 0.5s ease-out forwards';
}

// Manejar clic en una opción
function handleOptionClick(event) {
    const selectedOptionButton = event.target;
    const selectedAnswerIndex = parseInt(selectedOptionButton.dataset.index);
    const question = currentQuestions[currentQuestionIndex];

    // Deshabilitar todos los botones de opción
    optionsContainer.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
    });

    const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;

    if (isCorrect) {
        score++;
        selectedOptionButton.classList.add('correct-answer');
        explanationTitle.textContent = "¡Respuesta Correcta!";
        explanationTitle.className = 'font-bold text-lg mb-2 text-green-700'; // Tailwind green
    } else {
        incorrectAnswers++;
        selectedOptionButton.classList.add('selected-incorrect');
        optionsContainer.children[question.correctAnswerIndex].classList.add('correct-answer');
        explanationTitle.textContent = "Respuesta Incorrecta";
        explanationTitle.className = 'font-bold text-lg mb-2 text-red-700'; // Tailwind red
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
    errorMessageContainer.textContent = ''; // Limpiar mensajes de error previos

    if (allQuestions.length === 0) { // Si no hay preguntas cargadas (simulación)
        // Añadir preguntas de prueba si allQuestions está vacío y los módulos no se han cargado
        // ESTO ES SOLO PARA PRUEBAS INICIALES SIN LOS ARCHIVOS .JS DE PREGUNTAS
        console.warn("Banco de preguntas principal vacío. Usando preguntas de prueba.");
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 5; j++) { // 5 preguntas por unidad para prueba
                allQuestions.push({
                    id: `u${i}q${j}test`,
                    unit: i,
                    questionText: `Pregunta de prueba ${j} para la unidad ${i}. ¿Cuál es la respuesta?`,
                    options: [`Opción A (U${i}P${j})`, `Opción B (U${i}P${j})`, `Opción C (U${i}P${j})`, `Opción D (U${i}P${j})`],
                    correctAnswerIndex: Math.floor(Math.random() * 4),
                    explanation: `Esta es la explicación para la pregunta de prueba ${j} de la unidad ${i}. La opción correcta era la ${String.fromCharCode(65 + (this.correctAnswerIndex || 0))}.`
                });
            }
        }
         console.log("Preguntas de prueba añadidas:", allQuestions.length);
    }


    const questionSelectionResult = selectNewQuestions();

    if (questionSelectionResult.error) {
        console.error("Error selecting questions:", questionSelectionResult.error);
        errorMessageContainer.textContent = questionSelectionResult.error;
        // Opcionalmente, mostrar esto en la UI
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        return;
    }
    
    currentQuestions = questionSelectionResult.questions;
    
    if (!currentQuestions || currentQuestions.length < Math.min(QUESTIONS_PER_GAME, MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS)) {
        const msg = `No se pudieron cargar suficientes preguntas para iniciar la partida. Se requieren al menos ${Math.min(QUESTIONS_PER_GAME, MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS)} preguntas válidas y se obtuvieron ${currentQuestions ? currentQuestions.length : 0}.`;
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
    
    lastGameQuestionIds = currentQuestions.map(q => q.id); // Guardar IDs para la próxima partida

    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    console.log("Game ended. Last game IDs set:", lastGameQuestionIds);
}

// Reiniciar el juego
function playAgain() {
    // No es necesario recargar las preguntas si ya están en allQuestions
    // La función startGame se encargará de la selección.
    startGame();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    assignDOMelements();

    // Verificar si los elementos del DOM se asignaron correctamente
    if (!startGameBtn || !nextQuestionBtn || !playAgainBtn) {
        console.error("Error: No se pudieron asignar todos los botones del DOM. Verifica los IDs en HTML.");
        if(errorMessageContainer) errorMessageContainer.textContent = "Error crítico: No se pudieron cargar los componentes de la interfaz. Intenta recargar la página.";
        return;
    }
    
    startGameBtn.addEventListener('click', startGame);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    playAgainBtn.addEventListener('click', playAgain);

    // Carga inicial de preguntas (si es necesario o para validación temprana)
    // Aquí se podría hacer una llamada para cargar los módulos de preguntas si no se hace con import estático
    // Por ahora, la validación de si hay suficientes preguntas se hace en startGame()
    console.log("Event listeners assigned.");
    
    // Mostrar pantalla de inicio por defecto
    if (startScreen && gameScreen && endScreen) {
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
    } else {
        console.error("Error: Las pantallas principales no se encontraron en el DOM.");
    }
});

// Lógica para simular la carga de módulos de preguntas si es necesario
// Esto es solo un placeholder. La carga real vendrá de los imports.
async function loadAllQuestionModules() {
    // Esta función podría usarse si los imports fueran dinámicos
    // o para simular una carga asíncrona.
    // Por ahora, asumimos que los imports estáticos al inicio del archivo
    // (cuando estén descomentados) cargarán `allQuestions`.
    // Si `allQuestions` sigue vacío después de los imports, significa que los archivos no exportaron nada o no se encontraron.
    
    // Simulación de carga (reemplazar con imports reales)
    if (typeof unit1Questions !== 'undefined') allQuestions.push(...unit1Questions);
    // ... y así para todas las unidades

    console.log("Total de preguntas cargadas (simulado):", allQuestions.length);
    if (allQuestions.length === 0 && errorMessageContainer) {
        // Esto se mostraría si los imports fallan o los archivos están vacíos
        // errorMessageContainer.textContent = "Advertencia: No se cargaron preguntas de los módulos. El juego podría usar datos de prueba o no funcionar.";
    }
}

// Llamar a la carga simulada (o real si se implementa de forma asíncrona)
// loadAllQuestionModules(); // Comentado porque los imports estáticos son la forma principal.

