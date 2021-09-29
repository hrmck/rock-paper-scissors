let choice = ["Paper", "Scissors", "Rock"];
function computerPlay(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function printWin(playerSelection, computerSelection){
    return `You Win! Your ${playerSelection} beats ${computerSelection}`;
}

function printLose(playerSelection, computerSelection){
    return `You Lose! ${computerSelection} beats your ${playerSelection}`;
}

function printDraw(playerSelection){
    return `Draw! You both had ${playerSelection}`;
}

function playRound(playerSelection, computerSelection){
    // Paper < Scissors < Rock < Paper
    playerSelection = playerSelection.slice(0, 1).toUpperCase() 
                        + playerSelection.slice(1).toLowerCase();
    if (playerSelection == computerSelection) {
        return printDraw(playerSelection);
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        return printWin(playerSelection, computerSelection);
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return printLose(playerSelection, computerSelection);
    }
    return (choice.indexOf(playerSelection) > choice.indexOf(computerSelection)) ?
                printWin(playerSelection, computerSelection) : 
                printLose(playerSelection, computerSelection);
}

function game() {
    let numberOfWins = 0;
    let userInput = "";
    let userInputButtons = document.querySelectorAll('.choice');
    let resultOutputField = document.querySelector('#result');
    let pointOutputField = document.querySelector('#points');

    userInputButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            try {
                resultOutputField.innerHTML = playRound(e.target.value, computerPlay());
                if (resultOutputField.innerHTML.indexOf("Win") >= 0) {
                    numberOfWins++;
                }
                if (numberOfWins == 5) {
                    alert("You've got 5 points! Congrats!");
                }
                pointOutputField.innerHTML = `You now have ${numberOfWins} point(s). Let's get 5 points!`; 
            } catch (error) {
                console.log(error);
            }
        });
    });
}

game();
