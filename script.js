function getComputerChoice() {
	let rndNumber = Math.random();
	if (rndNumber < 0.33) return 'Rock';
	if (rndNumber >= 0.33 && rndNumber <= 0.66) return 'Paper';
	else return 'Scissors';
}
// function getPlayerChoice() {
// 	let choiceNumber = prompt(
// 		'Enter your choice, 1 for Rock, 2 for Paper, 3 for Scissors, default is 1'
// 	);
// 	if (choiceNumber === '1') return 'Rock';
// 	if (choiceNumber === '2') return 'Paper';
// 	if (choiceNumber === '3') return 'Scissors';
// 	else return 'Rock';
// }
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'Rock') {
		if (computerSelection === 'Rock') return 'Even';
		if (computerSelection === 'Paper')
			return `You loose! ${computerSelection} beats ${playerSelection}`;
		if (computerSelection === 'Scissors')
			return `You win! ${playerSelection} beats ${computerSelection}`;
	}
	if (playerSelection === 'Paper') {
		if (computerSelection === 'Paper') return 'Even';
		if (computerSelection === 'Scissors')
			return `You loose! ${computerSelection} beats ${playerSelection}`;
		if (computerSelection === 'Rock')
			return `You win! ${playerSelection} beats ${computerSelection}`;
	}
	if (playerSelection === 'Scissors') {
		if (computerSelection === 'Scissors') return 'Even';
		if (computerSelection === 'Rock')
			return `You loose! ${computerSelection} beats ${playerSelection}`;
		if (computerSelection === 'Paper')
			return `You win! ${playerSelection} beats ${computerSelection}`;
	}
}
// for (let i = 0; i < 10; i++) {
// 	console.log(playRound(getPlayerChoice(), getComputerChoice()));
// }
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const total = document.querySelector('#total');
let compPoints = 0;
let playerPoints = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (total.innerText === '') {
			result.innerText = playRound(button.innerText, getComputerChoice());
			scoreCalculate();
			scoreUpdate();
			totalCheck();
		}
	});
});

function scoreCalculate() {
	if (result.innerText.slice(4, 5) === 'w') {
		playerPoints++;
	}
	if (result.innerText.slice(4, 5) === 'l') {
		compPoints++;
	}
}
function scoreUpdate() {
	score.innerText = `Player ${playerPoints} : Computer ${compPoints}`;
}
function totalCheck() {
	if (playerPoints === 5) {
		total.innerText = 'PLAYER is the winner of the game!';
	} else if (compPoints === 5) {
		total.innerText = 'COMPUTER is the winner of the game!';
	}
}
