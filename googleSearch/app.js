const inputCtn = document.querySelector('.input-search-ctn');

function inputFunctions() {
    const inputElement = document.querySelector('#serchInput');
    const closeInputCtn = document.querySelector('.input-clear');
    const closeInputBtn = document.querySelector('#closeInputBtn');

    // add close button when input is not empty
    inputElement.addEventListener('keydown', function () {
        closeInputCtn.classList.remove('hide');
        inputElement.style.width = "65%";
        showPopup('#closeInputBtn', '.popup-clear');
    });
    // remove close button when input is empty
    inputElement.addEventListener('keyup', () => {
        if (inputElement.value === '') {
            closeInputCtn.classList.add('hide');
        };
    });
    // clear input on click
    closeInputBtn.addEventListener('click', function () {
        inputElement.value = "";
        closeInputCtn.classList.add('hide');
    });
    // search function
    document.addEventListener('keydown', function (e) {
        if (e.code == 'Enter') {
            const inputValue = inputElement.value;
            const googleSearch = "https://www.google.com/search?q=";

            window.location.href = googleSearch + inputValue;
            inputElement.value = "";
        };
    });
};

function showPopup(element, className) {
    inputCtn.querySelector(element).addEventListener('mouseover', function () {
        inputCtn.querySelector(className).classList.remove('hide');
    });
    inputCtn.querySelector(element).addEventListener('mouseout', function () {
        inputCtn.querySelector(className).classList.add('hide');
    });
};

window.addEventListener('DOMContentLoaded', function () {
    inputFunctions();
    showPopup('.input-img-mic', '.popup-mic');
    showPopup('.input-img-camera', '.popup-camera');
});