// define player and computer score to 0, use let bc it will change //

let playerScore = 0
let compScore = 0
const rockButton = document.querySelector("#rock")
const scissorsButton = document.querySelector("#scissors")
const paperButton = document.querySelector("#paper")
const compSelection = getComputerChoice()
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const compScoreSpan = document.querySelector('.comp-score')
const checkForWinner = (playerScore, compScore) => {
    if(playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore}! The indomidable human mind shall never be surpassed by the computer`
        outcomeDiv.appendChild(h2)
    }
    if(compScore == 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-lost')
        h2.innerText = `You lost ${playerScore} to ${compScore}! Feelsbadman`
        outcomeDiv.appendChild(h2)
    }
}

// write a function that will randomly return rock, paper, or scissors //

function getComputerChoice() {
    const arrayOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compSelection = (arrayOfChoices[randomNum])
    return compSelection
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score:  ${playerScore}`
    compScoreSpan.innerText = `Computer Score:   ${compScore}`
}

rockButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, compSelection)
    playerScore.innerText = `{playerScore}`
    compScore.innerText = `{compScore}`
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, compSelection)
    playerScore.innerText = `{playerScore}`
    compScore.innerText = `{compScore}`
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, compSelection)
    playerScore.innerText = `{playerScore}`
    compScore.innerText = `{compScore}`
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
}
)
function playRound(playerSelection, compSelection) {
    if (playerSelection === 'rock' && compSelection === 'rock') {
        const p = document.createElement('p')
        p.innerText = 'You both chose rock, you tied!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && compSelection === 'scissors') {
        const p = document.createElement('p')
        p.innerText = 'You both chose scissors, you tied!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && compSelection === 'paper') {
        const p = document.createElement('p')
        p.innerText = 'You both chose paper, you tied!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && compSelection === 'paper') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'Paper beats rock, you lose this round!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'Paper beats rock, you win this round!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'Rock beats scissors, you win this round!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'Rock beats scissors, you lose this round!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'Scissors beats paper, you lose this round!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'Scissors beats paper, you win this round!'
        outcomeDiv.appendChild(p)
    }
}





