var computer = { name: 'computer', score: 0, pick: '' }; 
var player = { name: '', score: 0, pick: ''};
var round = '0';

function newGame() {
	//reset
	computer.score = 0; 
	computer.pick = ""; 
	player.score = 0; 
	player.pick = ""; 
	round = 0;
	player.name = prompt("Jak siê nazywasz?", "Jan Kowalski"); 
	document.getElementById("playerName").innerHTML = player.name;

var buttons = document.getElementsByClassName("pick-button"); 
	for(var i = 0; i < buttons.length; i++) { 
	buttons[i].style.visibility = 'visible'; 
	}
};

function playerPick(pick) { 
	player.pick = pick;//save player's pick 
	computerPick();//choose computer's pick 
	checkResult();//check result
};

function computerPick() { 
	//random number between 0 and 3 
	switch (Math.floor(Math.random()*3)) {
		case 0: 
		computer.pick = "rock"; 
		break; 
		case 1: 
		computer.pick = "paper"; 
		break; 
		case 2: 
		computer.pick = "scissors"; 
		break; 
	} 
};

var checkResult = function(){
    var gameResult;
    if (player.pick === computer.pick) {
	    gameResult = "Tie!";
    }
    else if (player.pick=='rock' && computer.pick=='paper') {
	  computer.score++;
	  gameResult="Computer wins!";
    }
    else if (player.pick=='rock' && computer.pick=='scissors') {
	  player.score++;
	  gameResult=player.name + " wins!";
    }
    else if (player.pick=='paper' && computer.pick=='rock') {
	  player.score++;
	  gameResult=player.name + " wins!";
    }
    else if (player.pick=='paper' && computer.pick=='scissors') {
	  computer.score++;
	  gameResult="Computer wins!";
    }
    else if (player.pick=='scissors' && computer.pick=='rock') {
	  computer.score++;
	  gameResult="Computer wins!";
    }
    else if (player.pick=='scissors' && computer.pick=='paper') {
	  player.score++;
	  gameResult=player.name + " wins!";
    };
    document.getElementById("playerPick").innerHTML = player.pick;
    document.getElementById("computerPick").innerHTML = computer.pick;
    document.getElementById("gameResult").innerHTML = gameResult;
    document.getElementById("playerScore").innerHTML = player.score;
    document.getElementById("computerScore").innerHTML = computer.score;
};
