const computerChoice = Math.floor(Math.random() * 3) + 1;

let computerSelect
let playerSelect


function computerPlay() {
        if (computerChoice === 1) {
            computerSelect = "Opponent chose rock."
        }
        else if (computerChoice === 2) {
            computerSelect = "Opponent chose paper."
        }
        else {
            computerSelect = "Opponent chose scissors."
        };
        return computerSelect;
}

