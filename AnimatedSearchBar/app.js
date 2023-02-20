const searchBarCtn = document.querySelector('.search-bar-ctn');
const inputElement = document.querySelector('.input');

document.addEventListener('click', function (e) {

    if (e.target.classList.contains("fa-magnifying-glass") || e.target.classList.contains("input")) {
        searchBarCtn.classList.remove('active');
    } else {
        searchBarCtn.classList.add('active');
        inputElement.value = "";
    };
});

document.addEventListener('keydown', function (e) {
    if (e.code == 'Enter') {
        const inputValue = inputElement.value;
        const googleSearch = "https://www.google.com/search?q=";

        window.location.href = googleSearch + inputValue;
        inputElement.value = "";
    };
});