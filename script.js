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
    let resultsDiv = document.createElement("div");
    switch (lowerPSelect)
    {
        case "rock":
            if (lowerCSelect === "rock")
            {
                resultsDiv.innerHTML = ("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
            else if (lowerCSelect === "scissors")
            {
                resultsDiv.innerHTML = ("You Win! Rock beats Scissors!");
                return pscoreCheck = "win";
            }
            else if (lowerCSelect === "paper") {
                resultsDiv.innerHTML = ("You Lose! Rock loses to Paper!");
                return pscoreCheck = "lose";
            }
        break;

        case "scissors":
            if (lowerCSelect === "rock")
            {
                resultsDiv.innerHTML = ("You Lose! Scissors loses to Rock!");
                return pscoreCheck = "lose";
            }
            else if (lowerCSelect === "scissors")
            {
                resultsDiv.innerHTML = ("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
            else if (lowerCSelect === "paper") 
            {
                resultsDiv.innerHTML = ("You Win! Scissors beats Paper!");
                return pscoreCheck = "win";
            }
        break;

        case "paper":
            if (lowerCSelect === "rock")
            {
                resultsDiv.innerHTML = ("You Win! Paper beats Rock!");
                return pscoreCheck = "win";
            }
            else if (lowerCSelect === "scissors")
            {
                resultsDiv.innerHTML = ("You Lose! Paper loses to Scissors!");
                return pscoreCheck = "lose";
            }
            else if (lowerCSelect === "paper") {
                resultsDiv.innerHTML = ("Tie! " + lowerPSelect + " and " + lowerCSelect + ".");
            }
        break;

        default: 
            resultsDiv.innerHTML = ("Error!");
        break;
    }
}

function game () {
    let roundResult = playRound(this, computerPlay());
    let pscore = 0;
    let cscore = 0;
    let showResult = document.createElement ("p");
    if (roundResult === "win") {
        pscore++;
    }
    else if (roundResult === "lose") {
        cscore++;
    }
    if (pscore === 5 || cscore === 5) {
        if (pscore > cscore) {
            showResult.innerText = "You Won!";
        }
        else if (cscore > pscore) {
            showResult.innerText = "You Lost!";
        }
        else {
            showResult.innerText = "Tie!";
        }
    }

}
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");

btn1.innerHTML = "Rock";
btn2.innerHTML = "Paper";
btn3.innerHTML = "Scissors";

btn1.addEventListener("click", game());
btn2.addEventListener("click", game());
btn3.addEventListener("click", game());

document.body.appendChild (resultsDiv);
document.body.appendChild (btn1);
document.body.appendChild (btn2);
document.body.appendChild (btn3);
document.body.appendChild (showResult);



