const inputCtn = document.querySelector('.input-search-ctn');
const inputElement = document.querySelector('#serchInput');

function inputFunctions() {
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
            searchContent();
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

function searchLuckBtns() {
    document.querySelector('#searchBtn').addEventListener('click', function () {
        searchContent();
    });
};

function searchContent() {
    const inputValue = inputElement.value;
    const googleSearch = "https://www.google.com/search?q=";

    window.location.href = googleSearch + inputValue;
    inputElement.value = "";
};

window.addEventListener('DOMContentLoaded', function () {
    inputFunctions();
    showPopup('.input-img-mic', '.popup-mic');
    showPopup('.input-img-camera', '.popup-camera');
    searchLuckBtns();
});