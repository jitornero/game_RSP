const buttons = document.querySelectorAll('input');
const divResult = document.querySelector('.result');

buttons.forEach( (button)=> {
    if (button.value== "rock"){
        button.onclick = ()=> {game("rock")};
    } else if (button.value== "scissors") {
        button.onclick = ()=> {game("scissors")};
    } else {
        button.onclick = ()=> {game("paper")};
    }
});


//PLAYERS SELECTION
function playerSelection (player){

    document.querySelector('.player').textContent= `${player}`;
    return player;

}


//COMPUTERS SELECTION
function computerSelection () {
    let computer = ["rock", "scissors", "paper"];
    let randomNumber = computer[Math.floor(Math.random() * 3)];
    console.log(`Computer plays:  ${randomNumber}`);
    document.querySelector('.computer').textContent =`${randomNumber}`;

    return randomNumber;
}

let countPlayer = 0;
let countComputer = 0;

function playRound ( playerSelection,computerSelection) {
    
    if (playerSelection == computerSelection) {
        let tie = "Thats a tie!";
        console.log(tie);
        return  count(tie);
    }

    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        let win = "You win";
        console.log(win)
        return count(win);
    }

    else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper") {
        let loose = "You loose :(";
        console.log(loose);
        return count (loose);
    }

}

function game (player) {
        //SEUDOCOUDE: MIENTRAS PLAYROUND SE HAYA JUGADO MENOS DE 6 VECES, JUGAR. cUANDO TERMINE LAS 5 RONDAS, DEVOLVER RESULT.
            
        for (let i=0;i<6;i++){
        playRound(playerSelection(player),computerSelection());
        break;              
        }

        if (countComputer ==5 || countPlayer ==5){
            result();
            countComputer = 0;
            countPlayer = 0;
        } 
    }


function result (){

    let Result = "";
    
    if (countPlayer > countComputer){
        Result =  "Congrats! You win! Refresh the page and play again."
    }
    else if (countPlayer < countComputer){
        Result =  "Sorry:( You loose. try again and beat it!"
    }

    else if (countPlayer == countComputer){
        Result =  "That's a tie. Try again!"
    }

    let finalResult = `The Final result is 
    Player: ${countPlayer}
    Computer: ${countComputer}
    ${Result}`;
    document.querySelector(".result").textContent = finalResult;

    return finalResult;
}


function count (x){

    function print(){
        divResult.textContent =(`Total counter= 
        Player:${countPlayer}
        Computer: ${countComputer}`)
    }

    print();
    if (x == "You win"){
        countPlayer +=1;
        print();
    }

    else if (x == "You loose :("){
        countComputer +=1;
        print();
    }

    else if (x == "Thats a tie!"){
        print();
    }
}

