const playerChoice = document.querySelector(".player-choice")
const computerChoice = document.querySelector(".computer-choice")

const matchResult = document.querySelector(".match-result")

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
}

function victory() {
    matchResult.innerHTML == "Victory"
    playerPoints++
}

function tied() {
    matchResult.innerHTML == "Tied"
}

function rock() {
    let randComputerChoices = computerPossibleChoices[Math.floor(Math.random() * computerPossibleChoices.length)]
    
    playerChoice.innerHTML = 'Rock'
    computerChoice.innerHTML = randComputerChoices

    if (randComputerChoices == "Paper") {
        defeat()
    } else if (randComputerChoices == "Scissors") {
        victory()
    } else {
        tied()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
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
        tied()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
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
        tied()
    }

    totalComputerPoints.innerHTML = computerPoints
    totalPlayerPoints.innerHTML = playerPoints
}