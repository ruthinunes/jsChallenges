const questionElement = document.querySelector('.question');
const inputElement = document.querySelector('#answer');
const formElement = document.querySelector('.form');
const scoreElement = document.querySelector('.score');
const resetBtn = document.querySelector('#resetBtn');
const operationArray = ['+', '-', '*'];
const operation = operationArray[getRandomOperation()];

let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
};

function getRandomOperation() {
    return Math.floor(Math.random() * operationArray.length);
};

function getQuestion() {
    let operator = "";

    switch (operation) {
        case '+':
            operator = 'mais'
            break;
        case '-':
            operator = 'menos'
            break;
        case '*':
            operator = 'vezes'
            break;
        default:
            console.log('Operação inválida');
    };
    scoreElement.innerHTML = `SCORE: ${score}`;
    questionElement.innerHTML = `Quanto é ${n1} ${operator} ${n2} ?`
};

function checkResult(result) {
    let userAnswer = parseInt(inputElement.value);

    if (userAnswer === result) {
        score++;
        updateScore();
    } else {
        score--;
        updateScore();
    };
    inputElement.value = '';
};

function getScore() {
    return localStorage.getItem("score") ? JSON.parse(localStorage.getItem('score')) : [];
};

function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
};

function blinkCursor() {
    inputElement.focus();
    setInterval(function () {
        inputElement.classList.toggle('blink');
    }, 500);
};

window.addEventListener('DOMContentLoaded', function () {
    blinkCursor();
    getQuestion();
});

formElement.addEventListener('submit', function () {
    let result;

    switch (operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            console.log('Operação inválida');
    };
    checkResult(result)
});

resetBtn.addEventListener('click', function () {
    localStorage.removeItem('score');
    location.reload();
});