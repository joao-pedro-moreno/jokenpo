const playerChoice = document.querySelector(".player-choice")
const computerChoice = document.querySelector(".computer-choice")

const matchResult = document.querySelector(".match-result")
const gameWinner = document.querySelector(".game-winner")

const totalPlayerPoints = document.querySelector(".player-points")
const totalComputerPoints = document.querySelector(".computer-points")

let playerPoints = 0
let computerPoints = 0

const computerPossibleChoices = [
    'Rock',
    'Scissors',
    'Paper'
]

function defeat() {
    matchResult.innerHTML = "Defeat"
    computerPoints++
    return computerPoints
}

function victory() {
    matchResult.innerHTML = "Victory"
    playerPoints++
    return playerPoints
}

function tiedPoint() {
    matchResult.innerHTML = "Tied"
}

function rock() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Rock'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == "Paper") {
        defeat()
    } else if (randComputerChoices == "Scissors") {
        victory()
    } else if (randComputerChoices == "Rock") {
        tiedPoint()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    verifyWinner()
}

function scissors() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Scissors'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == "Rock") {
        defeat()
    } else if (randComputerChoices == "Paper") {
        victory()
    } else {
        tiedPoint()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    verifyWinner()
}

function paper() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]

    playerChoice.innerHTML = 'Paper'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == "Scissors") {
        defeat()
    } else if (randComputerChoices == "Rock") {
        victory()
    } else {
        tiedPoint()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
    verifyWinner()
}

function verifyWinner() {
    if (computerPoints == 10 || playerPoints == 10) {
        gameWinner.style.display = "block"
        if (computerPoints == 10) {
            gameWinner.innerHTML = "Computer Wins"
            computerPoints = 0
            playerPoints = 0
        } else if (playerPoints == 10) {
            gameWinner.innerHTML == "Player Wins"
            computerPoints = 0
            playerPoints = 0
        }
    } else {
        gameWinner.style.display = "none"
    }
}
