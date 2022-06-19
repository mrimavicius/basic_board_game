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

rollButton.onclick = () => {
    const randomNum = Math.ceil(Math.random() * 6)
    boardPosition += randomNum

    if(boardPosition > 28) {
        boardPosition -= 28
        playerPoints += 200
    }

    movePlayer()

    rolledNum.innerHTML = `You rolled: ${randomNum}`
    points.innerHTML = `Your points: ${playerPoints}`
}

function movePlayer() {
    const items = document.querySelectorAll(".item")

    items.forEach(x => x.innerHTML = "")

    const currentBox = document.querySelector(`.box${boardPosition}`)
    currentBox.innerHTML = '<i class="fa-solid fa-chess-knight"></i>' 
}

function appendBoard() {
    board.map(x => game.innerHTML += `<div class="item box${x}"</div>`)
    movePlayer()
}

appendBoard()