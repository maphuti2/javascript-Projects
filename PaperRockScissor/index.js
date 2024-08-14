//Declaring paper, rock and scissor
const paper = "paper";
const rock = "rock";
const scissor = "scissor";

let humanScore;
let computerScore;


//creating function that will randomly pick rock, paper or scissor

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * (4-1)+1);

    if (compChoice === 1){
        return paper;
    }
    else if (compChoice === 2){
        return rock;
    }else{
        return scissor;
    }
}

//creating function that takes user input

function getHumanChoice(human_Choice){
    human_Choice = prompt("Enter Paper, Rock or Scissor", "").toLowerCase().trim();
    if (human_Choice === paper || human_Choice === rock || human_Choice === scissor){
        return human_Choice;
    }
    else{
        return "Please play by the rules! TYPE ONLY PAPER, ROCK OR SCISSOR";
    }
    
}

// main function for the game decisions

function playGame(){

    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === paper && computerChoice === rock){
        humanScore += 1;
        console.log( `You won! ${humanChoice} beats ${computerChoice}`);
        }
        else if (humanChoice === rock && computerChoice ===   scissor){
        humanScore += 1;
        console.log( `You won! ${humanChoice} beats ${computerChoice}`);
        }
        else if (humanChoice === scissor && computerChoice === paper){
        humanScore += 1;
        console.log( `You won! ${humanChoice} beats ${computerChoice}`);
        }
        else if(humanChoice === computerChoice){
        humanScore += 1;
        computerScore += 1;
        console.log( `Draw! ${humanChoice} ties with ${computerChoice}`);
        }
        else if (humanChoice !== rock || humanChoice !== paper || humanChoice !== scissor){
            console.log( " '- 1 point' Please don't spoil the game! follow the RULES... ");
            computerScore += 1;
            humanScore -= 1;
        }
        else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let rounds = 0; rounds < 5; rounds++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound( humanChoice, computerChoice);
    }
   // const winner = "";
    if (humanScore > computerScore){
        console.log(`Human won! score ${humanScore} : ${computerScore}`);
    }
    else if (humanScore === computerScore){
        console.log(`It's DRAW! Score ${humanScore} : ${computerScore}`)
    }
    else{
        console.log(`Computer won! Score ${computerScore} : ${humanScore}`)
    }
}   

let game = playGame();
console.log(game);


