const emailInput = document.querySelector('#inputEmail');
const passwordInput = document.querySelector('#inputPassword');
const form = document.querySelector('.form');
const alertInput = document.querySelector('.input_alert');

emailInput.addEventListener('keydown', function () {
    emailInput.style.fontFamily = 'Crimson Text';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (emailInput.value == '' || passwordInput.value == '') {
        alertInput.classList.add('active');
        alertInput.textContent = 'Please, enter all values'
        return;
    } else {
        if (isValidEmail(emailInput.value)) {
            alertInput.classList.remove('active');
            alert('Login Accept');
            window.open('signUp.html');
        } else {
            alertInput.classList.add('active');
            alertInput.textContent = 'Please, insert a valid email'
        }
    }
});

function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};