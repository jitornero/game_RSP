const buttons = document.querySelectorAll('input');
const divResult = document.querySelector('.result');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

// VARIABLES CONTADORAS DE RONDA, IR A FUNCION GAME PARA VER
let countPlayer = 0;
let countComputer = 0;


//0. INICIA CON LOS BOTONES Y ASIGNA VALO A LOS PARAMETROS PARA LAS SIGUIENTES FUNCIONES
buttons.forEach( (button)=> {
    if (button.value== "piedra"){
        button.onclick = ()=> {game("piedra")};
    } else if (button.value== "tijera") {
        button.onclick = ()=> {game("tijera")};
    } else {
        button.onclick = ()=> {game("papel")};
    }
});


//2.a PLAYERS SELECTION
function playerSelection (player){
    document.querySelector('.player').textContent= `${player}`;
    console.log('Vos jugaste: ' + player)
    return player;

}


//2.b COMPUTERS SELECTION
function computerSelection () {
    let computer = ["piedra", "tijera", "papel"];
    let randomNumber = computer[Math.floor(Math.random() * 3)];
    console.log(`Computer plays:  ${randomNumber}`);
    document.querySelector('.computer').textContent =`${randomNumber}`;

    return randomNumber;
}



function playRound ( playerSelection,computerSelection) {
    
    if (playerSelection == computerSelection) {
        let tie = "Thats a tie!";
        console.log(tie);
        return  count(tie);
    }

    else if (playerSelection == "piedra" && computerSelection == "tijera" || playerSelection == "tijera" && computerSelection == "papel" || playerSelection == "papel" && computerSelection == "piedra") {
        let win = "You win";
        console.log(win)
        return count(win);
    }

    else if (playerSelection == "tijera" && computerSelection == "piedra" || playerSelection == "papel" && computerSelection == "tijera" || playerSelection == "piedra" && computerSelection == "papel") {
        let loose = "You loose :(";
        console.log(loose);
        return count(loose);
    }

}

// 1. INICIADOR + CONTROL DE LAS RONDAS.
function game (player) {
        divResult.className = 'result';
        //for (let i=0;i<6;i++){
        playRound(playerSelection(player),computerSelection());
       // i=0;
       // break;              
        //}

        if (countComputer ==5 || countPlayer ==5){
            Result();
            
        }
    
}


//CONTADOR
function count (x){

    function print(x){
        divResult.textContent =(`  
        --Tú: ${countPlayer} || ${countComputer} :Máquina-- // 
        ${x}`);
        
    }

    //print();
    if (x == "You win"){
        countPlayer +=1;
        print(x);
        result2.textContent = x;
    }

    else if (x == "You loose :("){
        countComputer +=1;
        print(x);
        result2.textContent = x;
    }

    else if (x == "Thats a tie!"){
        print(x);
        result2.textContent = x;
    }
}




// RESPUESTA FINAL
function Result (){

    let result = "";
    
    if (countPlayer > countComputer){
        result =  "Congrats! You win! Refresh the page and play again."
    }
    else if (countPlayer < countComputer){
        result =  "Sorry:( You loose. try again and beat it!"
    }

    let finalResult = `The Final result is 
    Player: ${countPlayer}
    Computer: ${countComputer}`;
    
    console.log(finalResult);
    divResult.textContent = `${finalResult}
     ${result}`;
    
    divResult.className = 'finalResult'; 
// REINICIA EL CONTADOR A 0
    countComputer = 0;
    countPlayer = 0;
}