const formElement = document.querySelector('form');
const billElement = document.querySelector('#billAmount');
const tipElement = document.querySelector('#tipPorcent');
const resultElement = document.querySelector('.result');

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    getValues();
});

function getValues() {
    if (billElement.value == "" || tipElement.value == "") {
        alert('Por favor insira todos os dados!');
        return;
    }
    const billValue = parseFloat(billElement.value);
    const tipValue = parseFloat(tipElement.value);
   
    calculate(billValue, tipValue);
};

function calculate(billValue, tipValue) {
    const totalTip = (billValue * tipValue) / 100
    const totalBill = billValue + totalTip;
    const resultContent = `<p class="tip-result">Total em gorgeta: <span>R$ ${totalTip.toFixed(2)}</span></p>
    <p class="bill-result">Total a pagar: <span>R$ ${totalBill.toFixed(2)}</span></p>`;

    resultElement.classList.add('active');
    resultElement.innerHTML = resultContent;
};