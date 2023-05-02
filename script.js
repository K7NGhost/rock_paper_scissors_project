let playerCounter = 0;
let computerCounter = 0;

const rockBtn = document.querySelector('#btnR');
const paperBtn = document.querySelector('#btnP');
const scissorBtn = document.querySelector('#btnS');

const rockImg = document.getElementById('rockImg');
const paperImg = document.getElementById('paperImg');
const scissorImg = document.getElementById('scissorImg');

const rockImg2 = document.getElementById('rockImg2');
const paperImg2 = document.getElementById('paperImg2');
const scissorImg2 = document.getElementById('scissorImg2');


rockBtn.addEventListener('click', () => {
    playRock();
})

function playRock() {
    rockImg.classList.add('active');
    const computerChoice = getComputerChoice();
    showImg(computerChoice);
    game('rock', computerChoice);
}

function showImg(computerSelection) {
    if(computerSelection === 'rock') {
        rockImg2.classList.add('active');
        paperImg2.classList.remove('active');
        scissorImg2.classList.remove('active');
        return;
    }
    if(computerSelection === 'paper') {
        paperImg2.classList.add('active');
        rockImg2.classList.remove('active');
        scissorImg2.classList.remove('active');
        return;
    }
    if(computerSelection === 'scissors') {
        scissorImg2.classList.add('active');
        paperImg2.classList.remove('active');
        rockImg2.classList.remove('active');
        return
    }
    rockImg2.classList.remove('active');
    paperImg2.classList.remove('active');
    scissorImg2.classList.remove('active');
}

function restartImg() {
    rockImg.classList.remove('hidden');
    rockImg2.classList.remove('hidden');
    paperImg2.classList.remove('hidden');
    scissorImg2.classList.remove('hidden');
}

function getComputerChoice() {
    const outcome = ['rock', 'paper', 'scissors']
    const aOutcome = outcome[Math.floor(Math.random()*3)];
    return aOutcome;
}

function playerSelection(selection) {
    return selection
}

function playRound(playerChoice, computerChoice) {
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

function game(playerSelection, computerSelection) {
    const playerSelect = playerSelection;
    const computerSelect = computerSelection;
    console.log(playRound(playerSelect, computerSelect));
    console.log("Player score = " + playerCounter);
    console.log("Computer score = " + computerCounter);
}
