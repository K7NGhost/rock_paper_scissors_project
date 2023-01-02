let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
    const outcome = ['rock', 'paper', 'scissors']
    const aOutcome = outcome[Math.floor(Math.random()*3)];
    return aOutcome;
}

function playerSelection() {
    return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function playRound(computerChoice, playerChoice) {
    if(computerChoice === 'rock' & playerChoice === 'paper') {
        playerChoice++;
        return 'You win! Paper beats rock';
    }
    if(computerChoice === 'paper' & playerChoice === 'paper') {
        return 'Draw! Paper and Paper';
    }
    if(computerChoice === 'scissors' & playerChoice === 'paper') {
        computerCounter++;
        return 'You lose! Scissors beats paper';
    }
    if(computerChoice === 'rock' & playerChoice === 'rock') {
        return 'Draw! Rock and rock';
    }
    if(computerChoice === 'paper' & playerChoice === 'rock') {
        computerCounter++;
        return 'You lose! Paper beats rock';
    }
    if(computerChoice === 'scissors' & playerChoice === 'rock') {
        playerCounter++;
        return 'You win! Rock beats scissors';
    }
    if(computerChoice === 'rock' & playerChoice === 'scissors') {
        computerCounter++;
        return 'You lose! Rock beats scissors';
    }
    if(computerChoice === 'paper' & playerChoice === 'scissors') {
        playerCounter++;
        return 'You win! Scissors beats paper';
    }
    if(computerChoice === 'scissors' & playerChoice === 'scissors') {
        return 'Draw! Scissors and scissors';
    }
    
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelect = playerSelection();
        const computerSelect = getComputerChoice();
        console.log(playRound(playerSelect, computerSelect));
        console.log("Player score = " + playerCounter);
        console.log("Computer score = " + computerCounter);
    }
}

game();