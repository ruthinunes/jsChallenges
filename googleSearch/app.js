const inputCtn = document.querySelector('.input-search-ctn');
const inputElement = document.querySelector('#serchInput');

function inputFunctions() {
    const closeInputCtn = document.querySelector('.input-clear');
    const closeInputBtn = document.querySelector('#closeInputBtn');

    // add close button when input is not empty
    inputElement.addEventListener('keydown', function () {
        closeInputCtn.classList.remove('hide');
        inputElement.style.width = "65%";
        showPopup('#closeInputBtn', '.popup-clear');
    });
    // remove close button when input is empty
    inputElement.addEventListener('keyup', () => {
        if (inputElement.value === '') {
            closeInputCtn.classList.add('hide');
        }
    });
    // clear input on click
    closeInputBtn.addEventListener('click', function () {
        inputElement.value = "";
        closeInputCtn.classList.add('hide');
    });
    // search function
    document.addEventListener('keydown', function (e) {
        if (e.code == 'Enter') {
            searchContent();
        };
    });
};

function showPopup(element, className) {
    inputCtn.querySelector(element).addEventListener('mouseover', function () {
        inputCtn.querySelector(className).classList.remove('hide');
    });
    inputCtn.querySelector(element).addEventListener('mouseout', function () {
        inputCtn.querySelector(className).classList.add('hide');
    });
};

function searchContent() {
    const inputValue = inputElement.value;
    const googleSearch = "https://www.google.com/search?q=";

    window.location.href = googleSearch + inputValue;
    inputElement.value = "";
};

function doLinks() {
    const linksElements = document.querySelectorAll('a');

    linksElements.forEach(function (link) {
        link.addEventListener('click', function () {
            let openLink = '';
            let innerText = link.innerText.toLowerCase();

            if (innerText) {
                switch (innerText) {
                    case 'gmail':
                        openLink = 'https://mail.google.com/mail'
                        break;
                    case 'images':
                        openLink = 'https://www.google.com/imghp?hl=EN'
                        break;
                    case 'português (brasil)':
                        // openLink = 'https'
                        break;
                    case 'about':
                        openLink = 'https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1'
                        break;
                    case 'advertising':
                        openLink = 'https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'
                        break;
                    case 'business':
                        openLink = 'https://smallbusiness.withgoogle.com/intl/pt-BR_br/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=BR#!/'
                        break;
                    case 'how search works':
                        openLink = 'https://www.google.com/search/howsearchworks/?fg=1'
                        break;
                    case 'privacy':
                        openLink = 'https://policies.google.com/privacy?hl=en-BR&fg=1'
                        break;
                    case 'terms':
                        openLink = 'https://policies.google.com/terms?hl=en-BR&fg=1'
                        break;
                    case 'settings':
                        openLink = 'https://www.google.com/preferences?hl=en-BR&fg=1'
                        break;
                    default:
                    // console.log('Can not find innerText');
                };
                window.location.href = openLink;
            } else {
                // console.log(link);
            };
        });
    });
};

async function doLuckSearch() {
    let query = inputElement.value;
    const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDidkPrwkGWFpCVvHcXIW-AUPeJYALX2w8&cx=c1085d8e56b614b01&q=${query}&num=1`;

    let response = await fetch(url);
    let data = await response.json();
    let result = data.items[0].link;
    return result;
};

async function dosearchLuckBtns() {
    document.querySelector('#searchBtn').addEventListener('click', function () {
        searchContent();
    });

    document.querySelector('#luckBtn').addEventListener('click', async function () {
        let data = await doLuckSearch();
        window.location.href = data;
    });
};

window.addEventListener('DOMContentLoaded', function () {
    inputFunctions();
    showPopup('.input-img-mic', '.popup-mic');
    showPopup('.input-img-camera', '.popup-camera');
    dosearchLuckBtns();
    doLinks();
});