function getComputerChoice (){
    let x = Math.floor(Math.random()*3+1);
    if(x==1) return "rock"
    if(x==2) return "paper"
    if(x==3) return "scissor"
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
        alert (`It was a tie. The computer also randomly chose ${computerSelection}.`)
        return 0;
    }
    if (playerSelection === "rock"){ 
        alert (`You chose ${playerSelection} while the computer chose ${computerSelection} so you ${computerSelection==="paper"?"lost":"won"}`)
        return (computerSelection==="paper"?-1:1)
    }
    if (playerSelection === "paper"){ 
        alert (`You chose ${playerSelection} while the computer chose ${computerSelection} so you ${computerSelection==="paper"?"lost":"won"}`)
        return (computerSelection==="scissor"?-1:1)
    }
    if (playerSelection === "scissor"){ 
        alert (`You chose ${playerSelection} while the computer chose ${computerSelection} so you ${computerSelection==="paper"?"lost":"won"}`)
        return (computerSelection==="rock"?-1:1)
    }
}

function game (){ //this game is best out of 5 (so a tie in one or three rounds can result in a tie of the whole game)
    let playerTotal = 0, computerTotal = 0, tieTotal = 0;
    for (let x = 0; x<5; x++){
        let rock = 0, paper = 0, scissor = 0, pWon;
        let playerchoice = prompt('Pick one from "Rock", "Paper", and "Scissor"',"Rock, Paper, Scissor").trim();
        if(playerchoice.match(/rock/i)) rock++;
        if(playerchoice.match(/paper/i)) paper++;
        if(playerchoice.match(/scissor/i)) scissor++;
        if(rock|paper|scissor){
            if (rock+paper+scissor === 1){
                if (rock) pWon=playRound ("rock",getComputerChoice())
                else if (paper) pWon=playRound ("paper",getComputerChoice())
                else pWon=playRound ("scissor",getComputerChoice())
                if(pWon===1) playerTotal++;
                if(pWon===-1) computerTotal++;
                if(pWon===0) tieTotal++;
            } else{
                alert("invalid entry. please pick ONLY one selection from 'Rock', 'Paper', and 'Scissor'.");
                x--;
                continue;
            }
        } else {
            alert("invalid entry. please pick from 'Rock', 'Paper', or 'Scissor'.");
            x--;
            continue;
        }
    }
    alert(`Player ${playerTotal} - ${computerTotal} Computer \n${tieTotal} ${tieTotal===1?"tie":"ties"}.`)
}

game();