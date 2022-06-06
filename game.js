

document.getElementById("button").onclick = function (){
    game();
}


// INPUT UNCASE SENTITIVE
function playerSelection (){
    let input = prompt("Hola!. Ingresa con la herramienta que quieres jugar. (Rock, Scissors or paper)");
    let lowerInput = input.toLowerCase();
    console.log(`You play: ${lowerInput}`);
    return lowerInput;

}


//COMPUTERS PLAY
function computerSelection () {
    let computer = ["rock", "scissors", "paper"];
    let randomNumber = computer[Math.floor(Math.random() * 3)];
    console.log(`Computer plays:  ${randomNumber}`);
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

function game () {
        for (let i=0; i <5; i++) {
            playRound(playerSelection(),computerSelection());              
        }
        result();
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
    console.log(finalResult)

}


function count (x){

    function print(){
        console.log(`Total counter= 
        Player:${countPlayer}
        Computer: ${countComputer}`)
    }

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

