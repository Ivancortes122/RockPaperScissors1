const psContainer = document.querySelector('#psContainer');
const csContainer = document.querySelector('#csContainer');
let playerScore = 0;
let computerScore = 0; 

function computerChoice(){
    return Math.floor(Math.random() * 3) + 1;
   }

function computerPlay(computerChoice) {
        if (computerChoice === 1) {
            return "rock";
        }
        else if (computerChoice === 2) {
            return "paper";
        }
        else {
            return "scissors";
        };
};


let gameOutcome;
   

function playRound (playerSelection) {   
let computerSelection = computerPlay(computerChoice());   
    if (playerSelection === computerSelection) {
    gameOutcome = 'You draw.';
    return gameOutcome;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        gameOutcome = 'Computer wins. Paper beats rock.';

        return gameOutcome;
    }
    else if (playerSelection ==='scissors' && computerSelection === 'rock') {
        gameOutcome = 'Computer wins. Rock beats scissors.';

        return gameOutcome
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        gameOutcome = 'Computer wins. Scissors beats paper.';

        return gameOutcome;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        gameOutcome = 'Player wins. Rock beats scissors.';

        return gameOutcome;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        gameOutcome = 'Player wins. Scissors beats paper.';

        return gameOutcome;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        gameOutcome = 'Player wins. Paper beats rock.';

        return gameOutcome;
    }
    else {
        gameOutcome = 'Invalid entry, try again.';
        return gameOutcome;
    };
}

const winner = document.querySelector('#winner');

function checkWinner () {
    if (playerScore == 5) {
       winner.textContent = 'Player wins it all! ' + playerScore + ' to ' + computerScore;   
    }
    else if (computerScore == 5) {
       winner.textContent = 'Computer wins it all! ' + computerScore + ' to ' + playerScore;
    }
    winner.textContent
};


const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const btn = document.querySelectorAll('button');
const result = document.querySelector('#result');


btnRock.addEventListener('click', () => {
    let gameOutcome = playRound('rock');

    if (gameOutcome === 'Player wins. Rock beats scissors.' || gameOutcome === 'Player wins. Scissors beats paper.' 
            || gameOutcome === 'Player wins. Paper beats rock.') {
                psContainer.textContent = ++playerScore;
    } else if (gameOutcome === 'Computer wins. Rock beats scissors.' || gameOutcome === 'Computer wins. Scissors beats paper.' 
            || gameOutcome === 'Computer wins. Paper beats rock.') {
                csContainer.textContent = ++computerScore;
    } 
    result.textContent = gameOutcome;
    checkWinner();
});


btnPaper.addEventListener('click', () => {
    let gameOutcome = playRound('paper');

    if (gameOutcome === 'Player wins. Rock beats scissors.' || gameOutcome === 'Player wins. Scissors beats paper.' 
            || gameOutcome === 'Player wins. Paper beats rock.') {
                psContainer.textContent = ++playerScore;
    } else if (gameOutcome === 'Computer wins. Rock beats scissors.' || gameOutcome === 'Computer wins. Scissors beats paper.' 
            || gameOutcome === 'Computer wins. Paper beats rock.') {
                csContainer.textContent = ++computerScore;
    }
    result.textContent = gameOutcome;
    checkWinner();
});


btnScissors.addEventListener('click', () => {
    let gameOutcome = playRound('scissors');

    if (gameOutcome === 'Player wins. Rock beats scissors.' || gameOutcome === 'Player wins. Scissors beats paper.' 
            || gameOutcome === 'Player wins. Paper beats rock.') {
                psContainer.textContent = ++playerScore;
    } else if (gameOutcome === 'Computer wins. Rock beats scissors.' || gameOutcome === 'Computer wins. Scissors beats paper.' 
            || gameOutcome === 'Computer wins. Paper beats rock.') {
                csContainer.textContent = ++computerScore;
    }
    result.textContent = gameOutcome;
    checkWinner();

});
    


