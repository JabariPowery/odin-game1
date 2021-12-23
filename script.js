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



