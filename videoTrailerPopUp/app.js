window.addEventListener('DOMContentLoaded', function () {
    openVideo();
});

function openVideo() {
    const btn = document.querySelector('.main_btn');
    const mainContainer = document.querySelector('.main_ctn');
    const videoContainer = document.querySelector('.trailer_ctn');
    const body = document.querySelector('body');

    btn.addEventListener('click', function () {
        mainContainer.classList.remove('active');
        videoContainer.classList.add('active');
        body.style.backgroundColor = 'black';
        closeVideo(videoContainer, mainContainer, body);
    });
};

function closeVideo(videoContainer, mainContainer, body) {
    const closeBtn = videoContainer.querySelector('#closeCtn');

    closeBtn.addEventListener('click', function () {
        videoContainer.classList.remove('active');
        mainContainer.classList.add('active');
        body.style.backgroundColor = '#4C4C4C'
    });
};