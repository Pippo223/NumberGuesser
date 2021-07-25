let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 8 + 1)
}

function compareGuesses(humanGuess, computerGuess, target) {
    if (Math.abs(humanGuess - target) === Math.abs(computerGuess - target)) {
        return true
    }
    
   else if (Math.abs(humanGuess - target) > Math.abs(computerGuess - target)) {
        return false
    }

    else {
        return true
    }
}

function updateScore (string1) {
    if (string1 === 'human')
    humanScore++

    else if (string1 === 'computer')
    computerScore++
}

function advanceRound() {
    currentRoundNumber++
}


