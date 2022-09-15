function getComputerChoice() {
	let rndNumber = Math.random();
	if (rndNumber < 0.33) return 'Rock';
	if (rndNumber >= 0.33 && rndNumber <= 0.66) return 'Paper';
	else return 'Scissors';
}
function getPlayerChoice() {
	let choiceNumber = prompt(
		'Enter your choice, 1 for Rock, 2 for Paper, 3 for Scissors, default is 1'
	);
	if (choiceNumber === '1') return 'Rock';
	if (choiceNumber === '2') return 'Paper';
	if (choiceNumber === '3') return 'Scissors';
	else return 'Rock';
}
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
for (let i = 0; i < 10; i++) {
	console.log(playRound(getPlayerChoice(), getComputerChoice()));
}
