//console game paper-scissors-rock

//possible choices array
const choices = ["ROCK", "PAPER", "SCISSORS"];

// const playerSelection = promt("please select rock ,scissors or paper");

//computer play function
function computerPlay() {
  let randNum = Math.floor(Math.random(choices.lenght + 1));
  let computerMove = choices[randNum];
  return computerMove;
}

//single round function
function playRound(userSelection, computerSelection) {
  let roundWinner = ""; //variable that indicates the winner of the round

  switch (userSelection) {
    case 1:
      //Tie
      if (userSelection == computerSelection) {
        console.log(
          `It's a TIE!You played :${userSelection} and computer: ${computerSelection}`
        );
        roundWinner = "tie";
        return roundWinner;
      }
      break;
    case 2:
      //user=>ROCK
      if (userSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log(
          `You Won! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "user";
        return winner;
      } else if (userSelection == "ROCK" && computerSelection == "PAPER") {
        console.log(
          `You Lose! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "computer";
        return roundWinner;
      }
      break;
    case 3:
      //user=>SCISSORS
      if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log(
          `You Lose! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "computer";
        return roundWinner;
      } else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log(
          `You Win! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "user";
        return roundWinner;
      }
      break;
    case 4:
      //user=>PAPER
      if (userSelection == "PAPER" && computerSelection == "ROCK") {
        console.log(
          `You Win! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "user";
        return roundWinner;
      } else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log(
          `You Lose! You played:${userSelection} and computer:${computerSelection}`
        );
        roundWinner = "computer";
        return roundWinner;
      }
      break;
  }
}

//function playerSelectionTest
function Test(playerSelection) {
  //for handling the input paramater

  if (playerSelection) {
    playerSelection.toUpperCase();
    choices.forEach((choice) => {
      if (playerSelection == choices[choice]) {
        return choices[playerSelection];
      } else if (playerSelection !== choices[choice]) {
        console.log("you have to input some of the possible choices");
        return;
      }
    });
  } else if (typeof playerSelection !== "string") {
    console.log("you input has to contain only chars");
  } else if ((playerSelection = "")) {
    console.log("please input a value");
    return;
  }
}

//=========================NEW CODE============================//
const game = function game() {
  let playerCount = 0;
  let computerCount = 0;
  let gameWinner = "";

  for (let i = 0; i < 5; i++) {
    let playerSelection = promt("please select rock ,scissors or paper");
    let userSelection = Test(playerSelection);
    let computerSelection = computerPlay();
    let roundWinnerOut = playRound(userSelection, computerSelection);
    switch (roundWinnerOut) {
      case 1:
        //winner=>User
        if (roundWinnerOut == "user") {
          playerCount++;
          console.log(`you: ${playerCount} , computer:${computerCount} `);
        }
      case 2:
        //winner=>computer
        if (roundWinnerOut == "computer") {
          computerCount++;
          console.log(`you: ${playerCount} , computer:${computerCount}`);
        }
      case 3:
        //winner=>tie
        if (roundWinnerOut == "tie") {
          console.log(
            ` it's a tie ! you: ${playerCount} , computer:${computerCount}`
          );
          i = i - 1;
        }
    }
  }

  if (playerCount > computerCount) {
    gameWinner = "user";
    console.log(
      `the winner is ${gameWinner}! you: ${playerCount} , computer:${computerCount}`
    );
  } else {
    gameWinner = "computer";
    console.log(
      `the winner is ${gameWinner}! you: ${playerCount} , computer:${computerCount}`
    );
  }
  alert("game over ,if you want to play again refresh the page");
};
//call game for initialize the game
game();
