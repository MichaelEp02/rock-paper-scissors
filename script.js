function getComputerChoise(){
    let choise = Math.floor(3*Math.random()); //getting a random number from 0 to 2
    return choise;
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