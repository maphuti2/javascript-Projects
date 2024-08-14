//Declaring paper, rock and scissor
const paper = "paper";
const rock = "rock";
const scissor = "scissor";

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    const user = prompt("please enter paper, rock or scissor:", "");
    if (user === paper || user === rock || user === scissor){
        return user;
    }
    else{
        return "This is Rock Paper Scissor game. Please play by the rules!"
    }
}

