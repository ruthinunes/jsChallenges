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

async function dosearchLuckBtns() {
    document.querySelector('#searchBtn').addEventListener('click', function () {
        searchContent();
    });

    document.querySelector('#luckBtn').addEventListener('click', async function () {
        let data = await doLuckSearch();
        window.location.href = data;

    });
};

function searchContent() {
    const inputValue = inputElement.value;
    const googleSearch = "https://www.google.com/search?q=";

    window.location.href = googleSearch + inputValue;
    inputElement.value = "";
};

async function doLuckSearch() {
    let query = inputElement.value;
    const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDidkPrwkGWFpCVvHcXIW-AUPeJYALX2w8&cx=c1085d8e56b614b01&q=${query}&num=1`;

    let response = await fetch(url);
    let data = await response.json();
    let result = data.items[0].link;
    return result;
};

window.addEventListener('DOMContentLoaded', function () {
    inputFunctions();
    showPopup('.input-img-mic', '.popup-mic');
    showPopup('.input-img-camera', '.popup-camera');
    dosearchLuckBtns();
});