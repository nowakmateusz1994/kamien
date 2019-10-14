let cells = [];

let h2 = document.querySelector('h2');
let button = document.querySelector('.button');
let endGame = document.querySelector('.endGame')


function checkWin(name, value) {
    if (
        (cells[0].innerHTML === value && cells[1].innerHTML === value && cells[2].innerHTML === value)
        ||
        (cells[3].innerHTML === value && cells[4].innerHTML === value && cells[5].innerHTML === value)
        ||
        (cells[6].innerHTML === value && cells[7].innerHTML === value && cells[8].innerHTML === value)
        ||
        (cells[0].innerHTML === value && cells[3].innerHTML === value && cells[6].innerHTML === value)
        ||
        (cells[1].innerHTML === value && cells[4].innerHTML === value && cells[7].innerHTML === value)
        ||
        (cells[2].innerHTML === value && cells[5].innerHTML === value && cells[8].innerHTML === value)
        ||
        (cells[0].innerHTML === value && cells[4].innerHTML === value && cells[8].innerHTML === value)
        ||
        (cells[2].innerHTML === value && cells[4].innerHTML === value && cells[6].innerHTML === value)
    ) {
        h2.innerHTML = name;
        endGame.style.display = 'block'
    }
}

function computerChoice() {
    let i = Math.floor(Math.random() * ((cells.length) - 0)) + 0;


    if (cells[i].innerHTML === "") {
        cells[i].innerHTML = "O"
        checkWin('Wygrał komputer', "O");
    } else {
        computerChoice()
    }

}

function playerChoice() {
    if (this.innerHTML === "") {
        this.innerHTML = "X";
        checkWin('Wygrał Gracz', "X");

        if (cells[0].innerHTML === "" || cells[1].innerHTML === "" || cells[2].innerHTML === "" || cells[3].innerHTML === "" || cells[4].innerHTML === "" || cells[5].innerHTML === "" || cells[6].innerHTML === "" || cells[7].innerHTML === "" || cells[8].innerHTML === "") {
            computerChoice();
        } else {
            h2.innerHTML = "Remis";
            endGame.style.display = 'block';
        }

    }
}

function playAgain() {

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    endGame.style.display = 'none';
}

cells[0] = document.querySelector('.container .firstRow .firstCell p');
cells[1] = document.querySelector('.container .firstRow .secondCell p');
cells[2] = document.querySelector('.container .firstRow .thirdCell p');
cells[3] = document.querySelector('.container .secondRow .firstCell p');
cells[4] = document.querySelector('.container .secondRow .secondCell p');
cells[5] = document.querySelector('.container .secondRow .thirdCell p');
cells[6] = document.querySelector('.container .thirdRow .firstCell p');
cells[7] = document.querySelector('.container .thirdRow .secondCell p');
cells[8] = document.querySelector('.container .thirdRow .thirdCell p');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', playerChoice)
}

button.addEventListener('click', playAgain)