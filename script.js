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
    let outcome = 'default string'
    if(playerSelection === computerSelection){
        outcome = `tie ${parseChoise(playerSelection)} ties ${parseChoise(computerSelection)}`;
        return outcome;
    }
    playerSelection++;
    if(playerSelection == 4){
        playerSelection = 0;
    }
    if(playerSelection == computerSelection)
        outcome = `you lose ${parseChoise(computerSelection)} beats ${parseChoise(--playerSelection)}`
    else if(playerSelection < computerSelection)
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
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerSelection(), getComputerChoise()));
    }
}