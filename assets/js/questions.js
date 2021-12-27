var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")

var score = 0;

var shuffleQuestions, currentQuestionIndex;
// Questions

var questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}

        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false}

        ]
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers: [
            {text:"numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}

        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console log", correct: true}
        ]
    }
]

// start button
startButton.addEventListener("click",startGame);

// set the timer
function startTimer(){
    timeleft--;
    timerEl.textContent = "Time:" + timeLeft;
    if(timeLeft <= 0) {
        saveScore();
    }

}

// start the quiz
function startGame() {
startButton.classList.add('hidden');
shuffleQuestions = questions.sort(() => Math.random() - .5);
questionContainerEl.classList.remove("hidden");
currentQuestionIndex = 0;
nextQuestion();
nextButton.classList.remove("hidden")

}

function showQuestion (questions) {

}