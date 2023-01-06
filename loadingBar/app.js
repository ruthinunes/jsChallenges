const loadCounter = document.querySelector('.load_counter');
const loadBar = document.querySelector('.load_bar-front');
let counter = 0;

window.addEventListener('DOMContentLoaded', function () {
    loadingBar();
});

function loadingBar() {
    loadCounter.innerText = counter + "%"
    loadBar.style.width = counter + "%"
    counter++

    if (counter < 101) {
        setTimeout(loadingBar, 50)
    }
};
