const btn = document.querySelector('.sidebar_btn');
const sideBar = document.querySelector('.sidebar');

function closeSideBar(sideBar) {
    sideBar.querySelector('#closeIcon').
        addEventListener('click', function () {
            sideBar.classList.remove('active');
            btn.classList.add('active');
        });
};

btn.addEventListener('click', function () {
    sideBar.classList.add('active');
    btn.classList.remove('active');

    closeSideBar(sideBar);
});