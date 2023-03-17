const tabuleiro = document.querySelector('.quadrado-principal');
const text = document.querySelector('p');
const cells = ["", "", "", "", "", "", "", "", "",];
let count = 0;

text.innerHTML = 'Começa com "X"';

function createCells() {
    cells.forEach(function (_cell, index) {
        const cellElement = document.createElement("div");
        cellElement.classList.add('celula');
        cellElement.id = index;
        tabuleiro.append(cellElement);
        cellElement.addEventListener("click", addPlayer);
    });
}

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
    const cells = document.querySelectorAll('.celula');
    const winnerCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];
    const hasText = Array.from(cells).every(function (cell) {
        return cell.innerText !== '';

    });

    for (const condition of winnerCombinations) {

        let [a, b, c] = condition;
        // console.log([a, b, c] = condition);
        if (cells[a].innerText && (cells[a].innerText == cells[b].innerText &&
            cells[a].innerText == cells[c].innerText)) {
            console.log(cells[a].innerText);
            text.innerHTML = `GANHOU "${cells[a].innerText}"`;
        }

        // text.innerHTML = "EMPATOU";
    }
    if (hasText) {
        text.innerHTML = "EMPATOU";
    }
}

createCells();