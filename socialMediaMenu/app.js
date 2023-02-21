const menuElement = document.querySelector('.social-menu');
const listElement = document.querySelector('.social-list');
const menuTextElement = document.querySelector('.social-menu p');
const liElements = document.querySelectorAll('li');

menuElement.addEventListener('click', function () {
    menuElement.classList.toggle('rotate');
    listElement.classList.toggle('hide');
});

liElements.forEach(function (li) {
    li.addEventListener('click', function () {
        menuTextElement.innerHTML = li.innerHTML;
        listElement.classList.add('hide');
        menuElement.classList.remove('rotate');
    });
});