const inputCtn = document.querySelector('.input-search-ctn');

function clearInput() {
    const inputElement = document.querySelector('#serchInput');
    const closeInputCtn = document.querySelector('.input-clear');
    const closeInputBtn = document.querySelector('#closeInputBtn');

    inputElement.addEventListener('keydown', function () {
        closeInputCtn.classList.remove('hide');
        showPopup('#closeInputBtn', '.popup-clear');
    });
    inputElement.addEventListener('keyup', () => {
        if (inputElement.value === '') {
            closeInputCtn.classList.add('hide');
        };
    });
    closeInputBtn.addEventListener('click', function () {
        inputElement.value = "";
        closeInputCtn.classList.add('hide');
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
    clearInput();
    showPopup('.input-img-mic', '.popup-mic');
    showPopup('.input-img-camera', '.popup-camera');
});