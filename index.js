

const prompt = require('prompt-sync')();


function playerInput() {
    const playerInput = prompt("Choose your move! Rock, Paper, or Scissors? ")
    return playerInput.toLowerCase();
}


// randomly returns 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
}




// compares the computer and the player's selection
// return a string that declares the winner 
// "You Lose! Paper beats Rock"
// return the results of this function call
function playRound(playerSelection, computerSelection) {
    // ! console.logs have to be here to get the text info
    // ! your previous console.logs at lines 10 and lines 27 were calling the functions outside of your playRound function
    // ! so you were running both playerSelection and computerSelection by themselves first, and
    // ! then running the playRound function next, which then called playerSelection and computerSelection again
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    // Rock choice
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock."
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    // Paper choice
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beat Paper"
    } else if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    // scissor choice
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beat Paper"
    } else if (playerSelection == computerSelection) {
        return "It's a tie!"

    } else {
        return "Something went wrong";
    }
}

const playerSelection = playerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
