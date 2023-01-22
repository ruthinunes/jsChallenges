const kits = ['Snare', 'Kick', 'Crash', 'Tom'];
const btnsContainer = document.querySelector('.main_content');

window.addEventListener('DOMContentLoaded', function () {
    createBtn();
    keyPressed();

});

function createBtn() {
    kits.forEach(function (kit) {
        displayBtns(kit);
    });
    btnsFunctions();
};

function displayBtns(kit) {
    btnsContainer.innerHTML += `<button class="main_btn">${kit}</button>`;
};

function btnsFunctions() {
    const btns = btnsContainer.querySelectorAll('.main_btn');

    btns.forEach(function (btn) {
        const kitsBtn = btn.innerText.toLowerCase();

        setBackgroundImage(kitsBtn, btn);
        setAudio(kitsBtn, btn);
        btnEventListener(btn);
    });
};

// ***** background image section ******
function setBackgroundImage(kitsBtn, btn) {

    switch (kitsBtn) {
        case 'snare':
            createImage(btn, kitsBtn);
            break;
        case 'kick':
            createImage(btn, kitsBtn);
            break;
        case 'crash':
            createImage(btn, kitsBtn);
            break;
        case 'tom':
            createImage(btn, kitsBtn);
            break;
    };
};

function createImage(btn, kitsBtn) {
    btn.style.backgroundImage = `url('images/${kitsBtn}.png')`;
};

function btnEventListener(btn) {
    btn.addEventListener('click', function () {
        btn.classList.add('active');
        playAudio(btn);
    });
};

// **** audio section *****
function setAudio(kitsBtn, btn) {
    let audio = `<audio src="sounds/${kitsBtn}.mp3"></audio>`
    btn.insertAdjacentHTML("afterend", audio);
};

function playAudio(btn) {
    let audio = btn.nextSibling;
    audio.play();
};

function keyPressed() {
    document.addEventListener('keydown', function (e) {
        let keyPressed = e.key;

        switch (keyPressed) {
            case 'c':
                playKeyPressed('crash');
                break;

            case 'k':
                playKeyPressed('kick');
                break;

            case 's':
                playKeyPressed('snare');
                break;
            case 't':
                playKeyPressed('tom');
                break;
        };

    });
};

function playKeyPressed(kit) {
    let audio = new Audio(`sounds/${kit}.mp3`);
    audio.play();
}