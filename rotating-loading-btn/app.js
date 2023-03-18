const btnElement = document.querySelector('.btn');
const loadElement = document.querySelector('.load-circle');
const ctnElement = document.querySelector('.ctn');

function activeLoad() {
    btnElement.style.display = 'none';
    ctnElement.style.animationPlayState = 'paused'
    ctnElement.classList.add('clicked');
    ctnElement.style.backgroundColor = '#3e6050'
    loadElement.classList.add('active');
};

btnElement.addEventListener('click', activeLoad);