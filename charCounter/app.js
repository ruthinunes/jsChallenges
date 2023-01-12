const textArea = document.querySelector('#textArea');

window.addEventListener('DOMContentLoaded', upadateCounter);

function upadateCounter() {
    let maxChar = textArea.maxLength;
    let totalCounter = document.querySelector('.total_counter');
    let remainingCounter = document.querySelector('.remainig_counter');

    totalCounter.innerText = textArea.value.length;
    remainingCounter.innerText = maxChar - textArea.value.length;
}

textArea.addEventListener('keyup', function () {
    upadateCounter();
});
