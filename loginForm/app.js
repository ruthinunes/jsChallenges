const emailInput = document.querySelector('#inputEmail');
const passwordInput = document.querySelector('#inputPassword');
const form = document.querySelector('.form');

emailInput.addEventListener('keydown', function () {
    emailInput.style.fontFamily = 'Crimson Text';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (emailInput.value == '' || passwordInput.value == '') {
        alert('Please enter values');
    } else {
        if (isValidEmail(emailInput.value)) {
            alert('Login Accept');
        } else {
            alert('Please, insert a valid email');
        }
    }
});

function isValidEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
};