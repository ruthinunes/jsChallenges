const inputElement = document.querySelector('#serchInput');
const closeInpuCtn = document.querySelector('.input-clear');
const iconMic = document.querySelector('.input-img-camera');
const iconCam = document.querySelector('#serchInput');

function clearInput() {
    inputElement.addEventListener('keydown', function () {
        closeInpuCtn.classList.remove('hide');
    });

    inputElement.addEventListener('keyup', () => {
        if (inputElement.value === '') {
            closeInpuCtn.classList.add('hide');
        };
    });
};

window.addEventListener('DOMContentLoaded', function () {
    clearInput();
});
