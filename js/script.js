const choices = ["rock", "paper", "scissors"];
const whoWins = { rock: "paper", paper: "scissors", scissors: "rock" };
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

function computerPlay() {
  //result can be: Rock, Paper or Scissors
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  playerSelection = playerSelection.toLowerCase();
  const ifWin = (winner, loser) =>
    `You Win! ${capitalize(winner)} beats ${capitalize(loser)}`;

  const ifLose = (winner, loser) =>
    `You Lose! ${capitalize(winner)} beats ${capitalize(loser)}`;

  if (playerSelection === computerSelection) {
    return "Oh! It's a tie!";
  } else if (playerSelection === whoWins[computerSelection]) {
    return ifWin(playerSelection, computerSelection);
  } else {
    return ifLose(computerSelection, playerSelection);
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Choose: rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissors"
    ) {
      console.log("player plays: " + playerSelection);
      const computerSelection = computerPlay();
      console.log("computer plays: " + computerSelection);
      console.log(playRound(playerSelection, computerSelection), i);
    } else {
      alert("type a valid answer");
    }
  }
}

game();
