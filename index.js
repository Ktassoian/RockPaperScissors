function playerInput() {
    const playerInput = prompt("Choose your move! Rock, Paper, or Scissors?").toLowerCase()
    return playerInput;
}

// randomly returns 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
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

// playerSelection should be case insensitive .toLowerCase()
// stores the player's choice to use in playRound



// compares the computer and the player's selection
// return a string that declares the winner 
// "You Lose! Paper beats Rock"
// return the results of this function call
function playRound(playerInput, computerSelection) {
    let computerPlay = computerSelection;
    // Rock choice
    if (playerInput == 'rock' && computerPlay == 'paper') {
        return "You lose! Paper beats rock."
    } else if (playerInput == 'rock' && computerPlay == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerInput == computerPlay) {
        return "It's a tie!"
    }
    // Paper choice
    else if (playerInput == 'paper' && computerPlay == 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerInput == 'paper' && computerPlay == 'scissors') {
        return "You lose! Scissors beat Paper"
    } else if (playerInput == computerPlay) {
        return "It's a tie!"
        // scissor choice
    } else if (playerInput == 'scissors' && computerPlay == 'rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerInput == 'scissors' && computerPlay == 'paper') {
        return "You win! Scissors beat Paper"
    } else if (playerInput == computerPlay) {
        return "It's a tie!"

    } else {
        return "Something went wrong";
    }
}
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));