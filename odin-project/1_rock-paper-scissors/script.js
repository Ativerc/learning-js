let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getPlayerChoice(roundNumber){
    console.log(`Round ${roundNumber}:\nChoose one: rock, paper, scissors`);
    let playerInput = prompt(`Round ${roundNumber}:\nEnter r for rock, Enter p for paper, Enter s for scissors`).toLowerCase();
    let validInputs = ["r", "p", "s"];
    while (!(validInputs.includes(playerInput))) {
        playerInput = prompt(`Bad Input!\nRound ${roundNumber}:\nEnter r for rock, Enter p for paper, Enter s for scissors`).toLowerCase();
    }
    if (playerInput == "r"){
        return "rock";
    } else if (playerInput == "p") {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection;
    let computerInput = computerSelection;
    // console.log(`P: ${playerInput}, C: ${computerInput}`);
    if (playerInput == computerInput) {
        return ([`Both chose ${playerInput}! It's a tie!`, "tie"]);
    } 
    if (playerInput == "paper") {
        if (computerInput == "rock") {
            return ([`You chose ${playerInput}. Computer chose ${computerInput}. Paper covers Rock! You Win!`, "player"]);
        } else {
            return ([`You chose ${playerInput}. Computer chose ${computerInput}. Scissors cut Paper! You Lose!`, "computer"]);
        }
    }
    if (playerInput == "scissors") {
        if (computerInput == "rock") {
            return ([`You chose ${playerInput}. Computer chose ${computerInput}. Rock smashes Scissors! You Lose!`, "computer"]);
        } else {
            return ([`You chose ${playerInput}. Computer chose ${computerInput}. Scissors cut Paper! You Win!`, "player"]);
        }
    }
    if (playerInput == "rock") {
        if (computerInput == "scissors") {
            return([`You chose ${playerInput}. Computer chose ${computerInput}. Rock smashes Scissors! You Win!`, "player"]);
        } else {
            return([`You chose ${playerInput}. Computer chose ${computerInput}. Paper covers Rock! You Lose!`, "computer"]);
        }
    }
}

function game() {
    let counter = 0;
    let playerScore = 0, computerScore = 0;
    while (counter < 5) {
        let round = [];
        round = playRound(getPlayerChoice(counter+1), getComputerChoice());
        // console.log(round);
        let playMessage = round[0];
        let playResult = round[1];
        console.log(playMessage);
        if (playResult == "tie") {
            playerScore++;
            computerScore++;
            // 
        } else if (playResult == "player") {
            playerScore++;
        }
        else {
            computerScore++;
        } 
        console.log(`Round ${counter+1} Score >>>\n Player: ${playerScore} Computer: ${computerScore}`);
        counter++;
    }
    displayFinalScoreMsg(playerScore, computerScore);
}

function displayFinalScoreMsg(playerScore, computerScore) {
    finalMessage = `Final Score >>>>\n Player: ${playerScore} Computer: ${computerScore}`;
    if (playerScore > computerScore) {
        console.log(finalMessage+"\n You Win!");
    } else if (playerScore < computerScore) {
        console.log(finalMessage+"\n Computer Wins!");
    } else if (playerScore == computerScore) {
        console.log(finalMessage+"\n It's a tie!");
    }
    console.log("Refresh page to restart!");
}

game();