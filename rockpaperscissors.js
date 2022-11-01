var playerWins = 0;
var playerLoses = 0;
var draws = 0;
var rockButton = document.getElementById('Rock');
var paperButton = document.getElementById('Paper');
var scissorsButton = document.getElementById('Scissors');
var result = "";


const Options = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}

const winCases = ["Rock,Scissors", "Scissors,Paper", "Paper,Rock"];

const loseCases = ["Scissors,Rock", "Paper,Scissors", "Rock,Paper"]

function updateChoice(clickedId){

    if(clickedId == 'Rock'){
        p1choice = Options[1];
    } else if (clickedId== 'Paper'){
        p1choice = Options[2];
    } else if (clickedId == 'Scissors'){
        p1choice = Options[3];
    }
    setWinner();

  }

function setWinner() {
    randomizedAiChoice();
    if(draw() == true){
        result = "Draw"
    }
    if(win() == true){
        result = "Win"
    }
    if(lose() == true){
        result = "Lose"
    }
    setResults();
}

function randomizedAiChoice() {
    aichoice = Options[Math.floor(Math.random() * 3) + 1];
    return aichoice;
}

function draw() {
    if(p1choice == aichoice) {
        draws++;
        return true;
    } else return false; 
}

function win() {
    if(winCases.includes(p1choice+","+aichoice)) {
        playerWins++;
        return true;
      } else return false;
}

function lose(){
    if(loseCases.includes(p1choice+","+aichoice)) {
        playerLoses++;
        return true;
    } else return false;
    
}

function setResults() {
    document.getElementById('testing').innerHTML = "Result: "+ result;
    document.getElementById('Player').innerHTML = "Player wins: "+ playerWins;
    document.getElementById('Tie').innerHTML = "Total draws: "+ draws;
    document.getElementById('Ai').innerHTML = "AI wins: "+ playerLoses;
    document.getElementById('playerchoice').innerHTML = "Your choice is: "+ p1choice;
    document.getElementById('aichoice').innerHTML = "The AI's choice is: "+ aichoice;
    if(result == "Lose") {
        document.getElementById('playerresult').innerHTML = "<span class='lostgame'>You lost! : c</span>";
    }
    if(result == "Win") {
        document.getElementById('playerresult').innerHTML = "<span class='wongame'>You won! :))</span>";
    }
    if(result == "Draw") {
        document.getElementById('playerresult').innerHTML = "<span class='drawgame'>It's a draw : |</span>";
    }

    
}

function resetResults() {
    p1choice = "";
    aichoice = "";
    result = "";
    playerLoses = 0;
    playerWins = 0;
    draws = 0;
    document.getElementById('playerresult').innerHTML = "";
    setResults();
}