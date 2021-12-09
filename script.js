function computerPlay() {
    let fchoice = "Rock";
    switch (Math.floor(Math.random() * 4)) {
        case 1:
            fchoice = "Rock";
            return fchoice;
            break;
        
        case 2:
            fchoice = "Paper";
            return fchoice;
            break;
        
        case 3:
            fchoice = "Scissors";
            return fchoice;
            break;

        default:
            fchoice = "Rock";
            return fchoice;
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    let pselect = playerSelection;
    let cselect = computerSelection;
    let pscoreCheck;
    let lowerPSelect = pselect.toLowerCase();
    let lowerCSelect = cselect.toLowerCase();
    switch (lowerPSelect)
    {
        case "rock":
            if (lowerCSelect === "rock")
            {
                console.log("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
            else if (lowerCSelect === "scissors")
            {
                console.log("You Win! Rock beats Scissors!");
                return pscoreCheck = "win";
            }
            else if (lowerCSelect === "paper") {
                console.log("You Lose! Rock loses to Paper!");
                return pscoreCheck = "lose";
            }
        break;

        case "scissors":
            if (lowerCSelect === "rock")
            {
                console.log("You Lose! Scissors loses to Rock!");
                return pscoreCheck = "lose";
            }
            else if (lowerCSelect === "scissors")
            {
                console.log("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
            else if (lowerCSelect === "paper") 
            {
                console.log("You Win! Scissors beats Paper!");
                return pscoreCheck = "win";
            }
        break;

        case "paper":
            if (lowerCSelect === "rock")
            {
                console.log("You Win! Paper beats Rock!");
                return pscoreCheck = "win";
            }
            else if (lowerCSelect === "scissors")
            {
                console.log("You Lose! Paper loses to Scissors!");
                return pscoreCheck = "lose";
            }
            else if (lowerCSelect === "paper") {
                console.log("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
        break;

        default: 
            console.log("Error!");
        break;
    }
}


function game() {
    let pscore = 0, pSelection;
    let cscore = 0, cSelection;
    for (let i = 1; i <= 5; i++) {
        pSelection = prompt("Enter rock, paper, or scissors: ");
        cSelection = computerPlay();
        console.log(playRound(pSelection, cSelection));
        if (playRound(pSelection, cSelection) === "win") {
            pscore += 1;
        } 
        else if (playRound(pSelection, cSelection) === "lose") {
            cscore += 1;
        }
    }
    if (pscore > cscore) {
        console.log("Player wins the game! Score was " + pscore + " to " + cscore);
    }
    else
    {
        console.log("Computer wins the game! Score was " + pscore + " to " + cscore);
    }
}

console.log(game());


