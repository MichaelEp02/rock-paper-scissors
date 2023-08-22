function getComputerChoise(){
    let computerChoise = Math.floor(3*Math.random()); //getting a random number from 0 to 2
    return computerChoise;
}

function getPlayerSelection(){
    let playerSelection = prompt('eneter your selection (rock, paper, scissors):') ;
    let flag = true;
    playerSelection = playerSelection.toLowerCase()
    while(flag)
    switch (playerSelection){
        case 'rock':
            playerSelection = 0;
            flag = false;
            break;
        case 'paper':
            playerSelection = 1;
            flag = false;
            break;
        case 'scissors':
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

}

function printChoise(choise){
    switch (choise){
        case 0:
            console.log('rock');
            break;
        case 1:
            console.log('paper');
            break;
        case 2:
            console.log('scissors');
            break;
    }
}