const prompt = require('prompt-sync')();


function playerInput() {
    const playerInput = prompt("Choose your move! Rock, Paper, or Scissors? ")
    return playerInput.toLowerCase();
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


// compares the computer and the player's selection
// return a string that declares the winner 
// return the results of this function call

function playRound(playerSelection, computerSelection) {
    // 0 = tie, 1 = player win, -1 = player lose

    // Rock choice
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        // return "You lose! Paper beats rock."
        return [-1, "You lose! Paper beats rock."]
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return [1, "You win! Rock beats Scissors."]
    } else if (playerSelection == computerSelection) {
        return [0, "It's a tie!"]
    }
    // Paper choice
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return [1, "You win! Paper beats Rock"]
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return [-1, "You lose! Acissors beats Paper."]
    } else if (playerSelection == computerSelection) {
        return [0, "It's a tie!"]
    }
    // scissor choice
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return [-1, "You lose! Rock beats Scissors."]
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return [1, "You win! Scissors beat Paper"]
    } else if (playerSelection == computerSelection) {
        return [0, "It's a tie!"]

    } else {
        return [-100, "Something went wrong"]
    }
}






// const score = function () {
//     if (playRound().includes('You win!')) {
//         playerScore += 1;
//     }
//     else if (playRound().includes("You lose!")) {
//         computerScore += 1;
//     }
//     else if (playerScore || computerScore === winningScore) {
//         isGameOver == true;
//     }
// }

function game() {
    let playerScore = [0];
    let computerScore = [0];

    // capture players score and store it

    // capture computer score and store it

    //
    // get playRound to run 5 times as long as score < 5
    for (let i = 0; i < 5; i++) {
        console.log(`Round number: ${i}`);
        // get player choice
        const playerSelection = playerInput();
        // get computer choice 
        const computerSelection = computerPlay();
        // console.log(`PlayerSelection: ${playerSelection}`);
        console.log(`Computer Selection: ${computerSelection}`);
        //run playRound with player and computer choice 
        let playerResult = playRound(playerSelection, computerSelection)
        console.log(playerResult[1]);

        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        let roundPoints = playerResult.slice(0, 1);

        if (roundPoints > 0) {
            playerScore.push(roundPoints);
        } else if (roundPoints < 0 && roundPoints > -100) {
            computerScore.push(roundPoints);
        }
        console.log('*********************************************')
        console.log(`Current player score: ${(playerScore.flat().reduce(reducer))}`);
        console.log(`Current Computer score: ${Math.abs(computerScore.flat().reduce(reducer))}`);
    }

    if (playerScore > computerScore) {
        console.log('Player win the game!')
    } else if (computerScore > playerScore) {
        console.log('Sorry, you lose. The computer won the game')

    } else if (playerScore === computerScore) {
        console.log('Game ended in a draw')
    }
}


game();