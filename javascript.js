// define player and computer score to 0, use let bc it will change //

let playerScore = 0
let compScore = 0

// write a function that will randomly return rock, paper, or scissors //

function getComputerChoice() {
    const arrayOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compSelection = (arrayOfChoices[randomNum])
    return compSelection
}

// test to see if function is randomly choosing rock, paper, or scissors //
getComputerChoice();

// write a function that plays a single round of rock paper scissors //

function playRound(playerSelection, compSelection) {
    if (playerSelection === 'rock' && compSelection === 'rock') {
        return 'You both chose rock, you tied!'
    } else if (playerSelection === 'scissors' && compSelection === 'scissors') {
        return 'You both chose scissors, you tied!'
    } else if (playerSelection === 'paper' && compSelection === 'paper') {
        return 'You both chose paper, you tied!'
    } else if (playerSelection === 'rock' && compSelection === 'paper') {
        compScore++
        return 'Paper beats rock, you lose this round!'
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        playerScore++
        return 'Paper beats rock, you win this round!'
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        playerScore++
        return 'Rock beats scissors, you win this round!'
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        compScore++
        return 'Rock beats scissors, you lose this round!'
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        compScore++
        return 'Scissors beats paper, you lose this round!'
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        playerScore++
        return 'Scissors beats paper, you win this round!'
    }
}

// write a function called game() and make it play a 5 round game that keeps score and reports a winner or loser at the end //

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('choose rock, paper, or scissors', 'rock, paper, scissors').toLowerCase();
        const compSelection = getComputerChoice();
        console.log(playRound(playerSelection, compSelection))
    }

// check who won aka reached score of 5 first //

    if (playerScore > compScore) {
        return 'You beat the computer, you are a genius'
    } else if (playerScore < compScore) {
        return 'You lost to the computer, sucks to suck'
    } else {
        return 'You tied with the computer, how is this possible?'
    }
}

// call the function //

console.log(game())
