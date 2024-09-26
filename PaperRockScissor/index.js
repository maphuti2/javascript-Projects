//DOM declaration and variables
const buttons = document.querySelectorAll("img");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const round = document.querySelector(".round");
const msg = document.querySelector("p");
const again = document.querySelector(".playagain")

const paper = 'paper';
const rock = 'rock';
const scissor = 'scissor';
let playScore = 0;
let computerScore = 0;
let gameRound = 0;
let message = "";

buttons.forEach((img) => {
    img.addEventListener('click', ( )=> {
        let playerChoice = img.id;
        playround(playerChoice);
        player.textContent = `Player: ${playScore}`;
        computer.textContent = `Computer: ${computerScore}`;
        round.textContent = `Round : ${gameRound}`;
        playGame();
        
    });
});


function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice){
        case 0 : 
        return 'rock';
        case 1 : 
        return 'paper';
        default :
        return 'scissor';
    }
}



function playround(playerChoice){
    
    let cp = getComputerChoice();
    if (playerChoice === cp){
        playScore++;
        computerScore++;
        }
    else if (playerChoice === rock && cp === scissor || playerChoice === paper && cp === rock || playerChoice === scissor && cp === paper){
        playScore++;
        }
    else{
        computerScore++;
        }

        gameRound++;
}


function playGame(){
    if (gameRound === 5){
        if (playScore > computerScore){
            message = "CONGRATULATIONS!";
           
        }
        else if (computerScore > playScore){
            message = "LOSER!"
            
        }
        else{
            message = "DRAW PLAY AGAIN";
            
        }

    
    msg.textContent = message;  
    alert("GAME OVER!");
    again.textContent = 'play again';
    again.addEventListener("click", () => {
        resetGame();
        again.textContent = "";
    });

    }
    if (gameRound === 6){
        resetGame();
        again.textContent = "";
    }
    
}


function resetGame(){
    playScore = 0;
    computerScore = 0;
    gameRound = 0;
    

    player.textContent = `Player: ${playScore}`;
    computer.textContent = `Computer: ${computerScore}`;
    round.textContent = `Round: ${gameRound}`;
    msg.textContent = "";
    
}