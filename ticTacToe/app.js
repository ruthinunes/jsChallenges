const boardElement = document.querySelector('.board');
const text = document.querySelector('p');
const resetBtn = document.querySelector('button');
const cells = ["", "", "", "", "", "", "", "", ""];
let count = 0;

function createCells() {
    cells.forEach(function (_cell, index) {
        const cellElement = document.createElement("div");
        cellElement.classList.add('cell');
        cellElement.id = index;
        boardElement.append(cellElement);
        cellElement.addEventListener("click", addPlayer);
    });
};

function addPlayer(e) {
    const cell = e.target;
    count++;
    if (count % 2 == 0) {
        cell.textContent = 'O';
        text.innerHTML = 'Agora é a vez do "X"';
    } else {
        cell.textContent = 'X';
        text.innerHTML = 'Agora é a vez da "O"';
    };

    e.target.removeEventListener("click", addPlayer);
    checkWinner();
};

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winnerCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];
    const isDraw = Array.from(cells).every(function (cell) {
        return cell.innerText !== '';
    });

    for (const condition of winnerCombinations) {
        let [a, b, c] = condition;

        if (cells[a].innerText && (cells[a].innerText == cells[b].innerText &&
            cells[a].innerText == cells[c].innerText)) {

            text.innerHTML = `GANHOU "${cells[a].innerText}"`;
            cells.forEach(function (cell) {
                cell.style.pointerEvents = 'none';
                cell.replaceWith(cell.cloneNode(true));
            });
        } else if (isDraw) {
            cells.forEach(function (cell) {
                cell.style.pointerEvents = 'none';
            });
            text.innerHTML = "EMPATOU";
        };;
    };
};

resetBtn.addEventListener('click', function () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell) {
        cell.innerHTML = "";
        cell.style.pointerEvents = 'auto';
        cell.addEventListener('click', addPlayer);
    });
    count = 0;
    text.innerHTML = 'Começa com "X"';
});
window.addEventListener('DOMContentLoaded', function () {
    text.innerHTML = 'Começa com "X"';
    createCells();
});