let playerCounter = 0;
let computerCounter = 0;
let gameCounter = 0;


const rockBtn = document.querySelector('#btnR');
const paperBtn = document.querySelector('#btnP');
const scissorBtn = document.querySelector('#btnS');


const rockImg = document.getElementById('rockImg');
const paperImg = document.getElementById('paperImg');
const scissorImg = document.getElementById('scissorImg');


const rockImg2 = document.getElementById('rockImg2');
const paperImg2 = document.getElementById('paperImg2');
const scissorImg2 = document.getElementById('scissorImg2');


const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const scoreChecker = document.getElementById('scoreChecker');

const popup = document.getElementById('popup');




rockBtn.addEventListener('click', () => {
   playRock();
   popup.classList.add('active');
})


paperBtn.addEventListener('click', () => {
   playPaper();
})


scissorBtn.addEventListener('click', () => {
   playScissor();
})


function playRock() {
   paperImg.classList.remove('active');
   scissorImg.classList.remove('active');
   rockImg.classList.add('active');
   const computerChoice = getComputerChoice();
   showImg(computerChoice);
   game('rock', computerChoice);
}


function playPaper() {
   rockImg.classList.remove('active');
   scissorImg.classList.remove('active');
   paperImg.classList.add('active');
   const computerChoice = getComputerChoice();
   showImg(computerChoice);
   game('paper', computerChoice);
}


function playScissor() {
   paperImg.classList.remove('active');
   rockImg.classList.remove('active');
   scissorImg.classList.add('active');
   const computerChoice = getComputerChoice();
   showImg(computerChoice);
   game('scissors', computerChoice);
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
       playerCounter++;
       return scoreChecker.innerHTML = 'You win! Paper beats rock';
   }
   if(computerChoice === 'paper' & playerChoice === 'paper') {
       return scoreChecker.innerHTML = 'Draw! Paper and Paper';
   }
   if(computerChoice === 'scissors' & playerChoice === 'paper') {
       computerCounter++;
       return scoreChecker.innerHTML = 'You lose! Scissors beats paper';
   }
   if(computerChoice === 'rock' & playerChoice === 'rock') {
       return scoreChecker.innerHTML = 'Draw! Rock and rock';
   }
   if(computerChoice === 'paper' & playerChoice === 'rock') {
       computerCounter++;
       return scoreChecker.innerHTML = 'You lose! Paper beats rock';
   }
   if(computerChoice === 'scissors' & playerChoice === 'rock') {
       playerCounter++;
       return scoreChecker.innerHTML = 'You win! Rock beats scissors';
   }
   if(computerChoice === 'rock' & playerChoice === 'scissors') {
       computerCounter++;
       return scoreChecker.innerHTML = 'You lose! Rock beats scissors';
   }
   if(computerChoice === 'paper' & playerChoice === 'scissors') {
       playerCounter++;
       return scoreChecker.innerHTML = 'You win! Scissors beats paper';
   }
   if(computerChoice === 'scissors' & playerChoice === 'scissors') {
       return scoreChecker.innerHTML = 'Draw! Scissors and scissors';
   }

  
}


function game(playerSelection, computerSelection) {
   const playerSelect = playerSelection;
   const computerSelect = computerSelection;
   console.log(playRound(playerSelect, computerSelect));
   console.log("Player score = " + playerCounter);
   console.log("Computer score = " + computerCounter);
   playerScore.innerHTML = "Player score = " + playerCounter;
   computerScore.innerHTML = "Computer score = " + computerCounter;
}
