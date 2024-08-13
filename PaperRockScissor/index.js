//Declaring paper, rock and scissor
const paper = "paper";
const rock = "rock";
const scissor = "scissor";

//creating function that will randomly pick rock, paper or scissor

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * (4-1)+1);

    if (compChoice === 1){
        return "paper";
    }
    else if (compChoice === 2){
        return "rock";
    }else{
        return "scissor";
    }
}
