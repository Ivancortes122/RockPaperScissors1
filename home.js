const computerChoice = Math.floor(Math.random() * 3) + 1;

let computerSelect;


function computerPlay(computerChoice) {
        if (computerChoice === 1) {
            computerSelect = "Opponent chose rock.";
            return computerSelect;
        }
        else if (computerChoice === 2) {
            computerSelect = "Opponent chose paper.";
            return computerSelect;
        }
        else {
            computerSelect = "Opponent chose scissors.";
            return computerSelect;
        };
        
        
}
console.log(computerPlay(computerChoice));

computerSelection = computerSelect;
let playerSelection = prompt("Enter rock, paper, or scissors");

function playerPlay (playerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === 'rock') {
        playerSelect = 'You chose rock.';
        return playerSelect;
    }
    else if (playerChoice === 'paper') {
        playerSelect = 'You chose paper.';
        return playerSelect;
    }
    else if (playerChoice ==='scissors') {
        playerSelect = 'You chose scissors.';
        return playerSelect;
    }
    else {
        playerSelect = 'Invalid entry.';
        return playerSelect;
    }
};
console.log(playerPlay(playerSelection));

let gameOutcome;

function playRound (playerSelection, computerSelection) {    
    if (playerSelection === computerSelection) {
    gameOutcome = 'You draw.';
    return gameOutcome;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        gameOutcome = 'Computer wins. Paper beats rock.';
        return gameOutcome;
    }
    else if (playerSelection ==='scissors' && computerSelection === 'rock') {
        gameOutcome = 'Computer wins. Rock beats scissors';
        return gameOutcome
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        gameOutcome = 'Computer wins. Scissors beats paper.';
        return gameOutcome;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        gameOutcome = 'Player wins. Rock beat scissors.';
        return gameOutcome;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        gameOutcome = 'Player wins. Scissors beats paper.';
        return gameOutcome;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        gameOutcome = 'Player wins. Paper beats rock.';
        return gameOutcome;
    }
    else {
        gameOutcome = 'Invalid entry, try again.';
        return gameOutcome;
    }
}


console.log(playRound());


