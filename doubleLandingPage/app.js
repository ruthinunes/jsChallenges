const mainContainer = document.querySelector('.container');
const bottomRightEl = document.querySelector('.bottom-left_ctn');
const topLeftEl = document.querySelector('.top-right_ctn');

topLeftEl.addEventListener('mouseenter', function () {
    mainContainer.classList.add('active_top-right');
});
topLeftEl.addEventListener('mouseleave', function () {
    mainContainer.classList.remove('active_top-right');
});

bottomRightEl.addEventListener('mouseenter', function () {
    mainContainer.classList.add('active_bottom-left');
});
bottomRightEl.addEventListener('mouseleave', function () {
    mainContainer.classList.remove('active_bottom-left');
});