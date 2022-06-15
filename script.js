const game = document.getElementById("game")
const rollButton = document.querySelector("button")
const rolledNum = document.querySelector(".rolledNum")
const points = document.querySelector(".points")

let boardPosition = 1
let playerPoints = 0

const board = [
    1, 2, 3, 4, 5, 6, 7, 8,
    28, 0, 0, 0, 0, 0, 0, 9,
    27, 0, 0, 0, 0, 0, 0, 10,
    26, 0, 0, 0, 0, 0, 0, 11,
    25, 0, 0, 0, 0, 0, 0, 12,
    24, 0, 0, 0, 0, 0, 0, 13,
    23, 0, 0, 0, 0, 0, 0, 14,
    22, 21, 20, 19, 18, 17, 16, 15
]


function appendBoard() {
    for(let i = 0; i < board.length; i++){
        
        if(board[i] > 0){
            game.innerHTML +=
            `<div class="show" id="${board[i]}"></div>`
        } else {
            game.innerHTML +=
            `<div class="hidden"></div>`

        }

    }

    const divs = document.querySelectorAll(".show")

    divs[0].innerHTML = `
    <i class="fa-solid fa-chess-knight"></i>
    `

    rollButton.onclick = () => {
        const randomNumber = Math.floor(Math.random() * 6 + 1)
        
        boardPosition += randomNumber
        
        if(boardPosition > 28) {
            boardPosition -= 28
            playerPoints += 200
        }

        const currentDiv = Array.from(divs).find(x => Number(x.id) === boardPosition )

        divs.forEach(x => x.innerHTML = '')

        currentDiv.innerHTML = `
            <i class="fa-solid fa-chess-knight"></i>
        `
        
        rolledNum.innerHTML = `
        You rolled: ${randomNumber}
        `

        points.innerHTML = `
        Your points: ${playerPoints}
        `
    }

}

appendBoard()