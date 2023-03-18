const hoursElement = document.querySelector('.hours');
const minsElement = document.querySelector('.min');
const secsElement = document.querySelector('.sec');

function setTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursAngle = (hours / 12) * 360 + (mins / 60) * 30;
    const minsAngle = (mins / 60) * 360 + (seconds / 60);
    const secondsAngle = (seconds / 60) * 360 - 90;

    hoursElement.style.transform = `rotate(${hoursAngle}deg)`;
    minsElement.style.transform = `rotate(${minsAngle}deg)`;
    secsElement.style.transform = `rotate(${secondsAngle}deg)`;
};

setInterval(setTime, 100);