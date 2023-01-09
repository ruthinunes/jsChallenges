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
    };
    cardsContent.forEach(function (card) {
        const cardID = card.id;
        if (cardID === id) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        };
    });
});