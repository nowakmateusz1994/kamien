let cells = [];

function checkWin() {
    if (
        ((cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML)
            && (cells[0].innerHTML != "" && cells[1].innerHTML != "" && cells[2].innerHTML != ""))
        ||
        ((cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML)
            && (cells[3].innerHTML != "" && cells[4].innerHTML != "" && cells[5].innerHTML != ""))
        ||
        ((cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML)
            && (cells[6].innerHTML != "" && cells[7].innerHTML != "" && cells[8].innerHTML != ""))
        ||
        ((cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML)
            && (cells[0].innerHTML != "" && cells[3].innerHTML != "" && cells[6].innerHTML != ""))
        ||
        ((cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML)
            && (cells[1].innerHTML != "" && cells[4].innerHTML != "" && cells[7].innerHTML != ""))
        ||
        ((cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML)
            && (cells[2].innerHTML != "" && cells[5].innerHTML != "" && cells[8].innerHTML != ""))
        ||
        ((cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML)
            && (cells[0].innerHTML != "" && cells[4].innerHTML != "" && cells[8].innerHTML != ""))
        ||
        ((cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML)
            && (cells[2].innerHTML != "" && cells[4].innerHTML != "" && cells[6].innerHTML != ""))
    ) {
        console.log('koniec')
    }
}

function computerChoice() {
    let i = Math.floor(Math.random() * ((cells.length) - 0)) + 0;
    console.log(i);

    if (cells[i].innerHTML === "") {
        cells[i].innerHTML = "O"
        checkWin();
    } else {
        computerChoice()
    }

}

function playerChoice() {
    if (this.innerHTML === "") {
        this.innerHTML = "X";
        checkWin();
        console.log(this)

        if (cells[0].innerHTML === "" || cells[1].innerHTML === "" || cells[2].innerHTML === "" || cells[3].innerHTML === "" || cells[4].innerHTML === "" || cells[5].innerHTML === "" || cells[6].innerHTML === "" || cells[7].innerHTML === "" || cells[8].innerHTML === "") {
            computerChoice();
        }

    }
    


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

