function getHours() {
    let hours = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();

    if (hours < 10) {
        hours = '0' + hours
    }
    if (mins < 10) {
        mins = '0' + mins
    }
    if (secs < 10) {
        secs = '0' + secs
    }

    document.querySelector('#hour').textContent = hours;
    document.querySelector('#mins').textContent = mins;
    document.querySelector('#secs').textContent = secs;

    clockStyle(hours);
};

function clockStyle(hours) {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const timeContainer = document.querySelectorAll('.time_ctn');
    let style = "";
    let remove = "";

    if (hours >= 6 && hours <= 12) {
        if (body.classList !== '') {
            remove = "night";
            removeClass(body, container, timeContainer, remove)
        }
    } else if (hours >= 13 && hours < 18) {
        style = 'afternoon'
        setClasses(body, container, timeContainer, style);
    } else {
        style = 'night'
        remove = "afternoon";
        removeClass(body, container, timeContainer, remove)
        setClasses(body, container, timeContainer, style);
    };
};

function setClasses(body, container, timeContainer, style) {

    body.classList.add(style);
    container.classList.add(style);
    timeContainer.forEach(function (container) {
        container.classList.add(style);
    });
};

function removeClass(body, container, timeContainer, remove) {

    body.classList.remove(remove);
    container.classList.remove(remove);
    timeContainer.forEach(function (container) {
        container.classList.remove(remove);
    });
};

getHours();
setInterval(getHours, 1000);