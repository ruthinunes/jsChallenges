const btn = document.querySelector('.btn');

function getRandomPassword() {
    const input = document.querySelector('#input');
    const passwordLength = 10;
    var password = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%.#@$;'/><&*+-";

    for (i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomNum, randomNum + 1);
    };
    input.value = password;
    copyPassword(input);
};

function copyPassword(input) {
    const copyBtn = document.querySelector('#copyBtn');

    copyBtn.addEventListener('click', function () {
        input.select();
        // for mobiles
        input.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(input.value);
        showAlert(input.value)
    });
};

function showAlert(input) {
    const alertContainer = document.querySelector('#alertContainer');
    alertContainer.textContent = `${input} copied`;
    alertContainer.classList.add('active');

    setTimeout(function () {
        alertContainer.classList.remove('active');
    }, 1500);
};

btn.addEventListener('click', getRandomPassword);