const btns = document.querySelectorAll('.btn');
const cardsCtn = document.querySelector('.cards');
const cardsContent = document.querySelectorAll('.card_content');

cardsCtn.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        cardsContent.forEach(function (card) {
            card.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    };
});