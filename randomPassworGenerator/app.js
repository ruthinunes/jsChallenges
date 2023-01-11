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
        showAlert(input.value, copyBtn)
    });
};

function showAlert(input, copyBtn) {
    const alertContainer = document.querySelector('#alertContainer');
    alertContainer.textContent = `${input} copied`;
    alertContainer.classList.add('active');
    copyBtn.style.color = '#D77B7D';

    setTimeout(function () {
        alertContainer.classList.remove('active');
        copyBtn.style.color = '#252525';
    }, 1500);
};

btn.addEventListener('click', getRandomPassword);