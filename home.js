// this function returns a random number between 1-3
function computerChoice(){
    return Math.floor(Math.random() * 3) + 1;
   }

// this function passes computerChoice function to generate a random number
// this function converts each number to a choice of rock, paper, or scissors
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
// this function passes playerSelection as a parameter
// this function prompts player to input rock, paper, or scissors
// this function converts their input to lower case to make input case insensitive

   function playerPlay (playerSelection) {
       let playerChoice = prompt("Enter rock, paper, or scissors");
       playerChoice = playerChoice.toLowerCase();
   
       if (playerChoice === 'rock') {
           return 'rock';
       }
       else if (playerChoice === 'paper') {
           return 'paper';
       }
       else if (playerChoice ==='scissors') {
           return 'scissors';
       }
       else {
           return 'Invalid entry.';
       }
   };
// this sets playerSelection to the return value of playerPlay()
   let playerSelection = playerPlay();
// this sets computerSelection to return the value of computerPlay, the value
// which is generated in computerChoice
   let computerSelection = computerPlay(computerChoice());
   console.log('You selected ' +playerSelection + " and the opponent selected "+computerSelection);
   

  
   let gameOutcome;

   let playerScore = 0;
   let computerScore = 0; 
   
   function playRound (playerSelection, computerSelection) {   
       if (playerSelection === computerSelection) {
       gameOutcome = 'You draw.';
       return gameOutcome;
       }
       else if (playerSelection === 'rock' && computerSelection === 'paper') {
           gameOutcome = 'Computer wins. Paper beats rock.';
           computerScore += 1;
           return gameOutcome;
       }
       else if (playerSelection ==='scissors' && computerSelection === 'rock') {
           gameOutcome = 'Computer wins. Rock beats scissors';
           computerScore += 1;
           return gameOutcome
       }
       else if (playerSelection === 'paper' && computerSelection === 'scissors') {
           gameOutcome = 'Computer wins. Scissors beats paper.';
           computerScore += 1;
           return gameOutcome;
       }
       else if (playerSelection === 'rock' && computerSelection === 'scissors') {
           gameOutcome = 'Player wins. Rock beat scissors.';
           playerScore += 1;
           return gameOutcome;
       }
       else if (playerSelection === 'scissors' && computerSelection === 'paper') {
           gameOutcome = 'Player wins. Scissors beats paper.';
           playerScore += 1;
           return gameOutcome;
       }
       else if (playerSelection === 'paper' && computerSelection === 'rock') {
           gameOutcome = 'Player wins. Paper beats rock.';
           playerScore += 1;
           return gameOutcome;
       }
       else {
           gameOutcome = 'Invalid entry, try again.';
           return gameOutcome;
       };
    }
    
let whoWins;

function gameScore (){
       if (playerScore > computerScore) {
            whoWins = 'Player wins it all! ' + playerScore + ' to ' + computerScore;
            return whoWins;
       }
        else if (playerScore < computerScore) {
            whoWins = 'Computer wins it all! ' +computerScore + ' to ' +playerScore;
            return whoWins;
       }
       else {
           whoWins = 'It is a draw';
           return whoWins;
       }
   };
  
   console.log(playRound(playerSelection, computerSelection));

   


   
   // Round 2:
   playerSelection = playerPlay();
   computerSelection = computerPlay(computerChoice());
   playRound(playerSelection, computerSelection);
   console.log('You selected ' +playerSelection + " and the opponent selected "+computerSelection);
   console.log(playRound(playerSelection, computerSelection))
   // Round 3:
   playerSelection = playerPlay(); 
   computerSelection = computerPlay(computerChoice());
   playRound(playerSelection, computerSelection);
   console.log('You selected ' +playerSelection + " and the opponent selected "+computerSelection);
   console.log(playRound(playerSelection, computerSelection))
   // Round 4:
   playerSelection = playerPlay();
   computerSelection = computerPlay(computerChoice());
   playRound(playerSelection, computerSelection);
   console.log('You selected ' +playerSelection + " and the opponent selected "+computerSelection);
   console.log(playRound(playerSelection, computerSelection))
   // Round 5:
   playerSelection = playerPlay(); 
   computerSelection = computerPlay(computerChoice());
   playRound(playerSelection, computerSelection);
   console.log('You selected ' +playerSelection + " and the opponent selected "+computerSelection);
   console.log(playRound(playerSelection, computerSelection))

   console.log(gameScore(whoWins));