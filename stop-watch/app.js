const appendSeconds = document.querySelector('.seconds');
const appendTens = document.querySelector('.tens');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let tens = 0;
let interval;

startBtn.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    console.log(interval)
});