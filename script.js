function getComputerChoise(){
    let computerChoise = Math.floor(3*Math.random()); //getting a random number from 0 to 2
    return computerChoise;
}

function getPlayerSelection(buttonID){
    switch (buttonID){
        case 'rock-button':
            playerSelection = 0;
            flag = false;
            break;
        case 'paper-button':
            playerSelection = 1;
            flag = false;
            break;
        case 'scissors-button':
            playerSelection = 2;
            flag = false;
            break;
        default:
            playerSelection = prompt('check spelling and eneter again(rock, paper, scissors):');
            break;
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    let outcome = 'default string'
    if(playerSelection === computerSelection){
        outcome = `tie ${parseChoise(playerSelection)} ties ${parseChoise(computerSelection)}`;
        return outcome;
    }
    playerSelection++;
    if(playerSelection == 3){
        playerSelection = 0;
        if(playerSelection == computerSelection){
            outcome = `you lose ${parseChoise(computerSelection)} beats scissors`;
            return outcome;
        }
        else{
            outcome = `you win scissors beats ${parseChoise(computerSelection)}`;
            return outcome;
        }
    }
    if(playerSelection == computerSelection)
        outcome = `you lose ${parseChoise(computerSelection)} beats ${parseChoise(--playerSelection)}`
    else
        outcome = `you win ${parseChoise(--playerSelection)} beats ${parseChoise(computerSelection)}`
    
    return outcome;
}

function parseChoise(choise){
    switch (choise){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

let gameCounter = 0;
let winCounter = 0;
const div = document.querySelector('div');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        div.innerText = playRound(getPlayerSelection(button.id) , getComputerChoise());
        gameCounter++;
        if(div.innerText.includes('win'))
            winCounter++;
        else if(div.innerText.includes('lose'))
            winCounter--;
        
        if(gameCounter >= 5){
            if(winCounter > 0)
                div.innerText+='\nyou won the game';
            else if(winCounter < 0)
                div.innerText+='\nyou lost the game';
            else
                div.innerText+='\nthe game is a tie';
                
            gameCounter = 0;
            winCounter = 0;
        }
    })
})