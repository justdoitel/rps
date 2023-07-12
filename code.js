function getRobotChoice (){ //TODO: delay 500-1000 second to make it look like it's thinking (perhaps with loading symbol)
    let x = Math.floor(Math.random()*3+1);
    if(x==1) return "rock"
    if(x==2) return "paper"
    if(x==3) return "scissor"
}

const humanPic = document.querySelector(".player img")
const robotPic = document.querySelector(".robot img")
const playerInstruction = document.querySelector(".player .instruction")
const robotInstruction = document.querySelector(".robot .instruction")
const playerScoreUI = document.querySelector(".player .score")
const robotScoreUI = document.querySelector(".robot .score")
const btns = document.querySelectorAll(".btns input")
const resetbtn = document.querySelector("#reset")

let playerScore = 0;
let robotScore = 0;

function playRound(playerSelection, robotSelection) { //TODO: make this into a function that returns number (so another function deals w UI and incrementing)
    humanPic.src = `${playerSelection}.png`
    robotPic.src = `${robotSelection}.png`
    if(playerSelection===robotSelection){
        playerInstruction.textContent = "Tie"
        robotInstruction.textContent = "Tie"
    }

    if (playerSelection==="rock"){
       if(robotSelection==="paper"){
            playerInstruction.textContent = "Lost"
            robotInstruction.textContent = "Won"
            robotScore++;
       }
       else if(robotSelection==="scissor"){
            robotInstruction.textContent = "Lost"
            playerInstruction.textContent = "Won"
            playerScore++;
       }
    }
    else if (playerSelection === "paper"){ 
        if(robotSelection==="rock"){
            robotInstruction.textContent = "Lost"
            playerInstruction.textContent = "Won"
            playerScore++;
        }
        if(robotSelection==="scissor"){
            playerInstruction.textContent = "Lost"
            robotInstruction.textContent = "Won"
            robotScore++;
        }
    }
    else if (playerSelection === "scissor"){ 
        if(robotSelection==="rock"){
            playerInstruction.textContent = "Lost"
            robotInstruction.textContent = "Won"
            robotScore++;
        }
        if(robotSelection==="paper"){
            robotInstruction.textContent = "Lost"
            playerInstruction.textContent = "Won"
            playerScore++;
        }
    }
    playerScoreUI.textContent = playerScore;
    robotScoreUI.textContent = robotScore;

    if(robotScore===5||playerScore===5){
        if(playerScore===5){
            document.querySelector(".player .scoring").style.color ="green";
            playerInstruction.style.color ="green";
        } else {
            document.querySelector(".robot .scoring").style.color ="green";
            robotInstruction.style.color ="green";
        }
        resetbtn.style.display = "inline-block"
        for (btn of btns){
            btn.disabled = true;
            btn.classList.add("disabled");
        }
    }
}


for (btn of btns){
    btn.addEventListener("click",(event)=>(playRound(event.currentTarget.dataset.choice,getRobotChoice ())))
}

resetbtn.addEventListener("click",()=>{
    document.querySelector(".player .scoring").style.color ="black";
    playerInstruction.style.color ="black";
    document.querySelector(".robot .scoring").style.color ="black";
    robotInstruction.style.color ="black";
    resetbtn.style.display = "none";
    for (btn of btns){
        btn.disabled = false;
        btn.classList.remove("disabled"); 
    }
    playerScore=0;
    robotScore=0;
    robotInstruction.textContent = "Waiting..."
    playerInstruction.textContent = "Choose a weapon!"
    playerScoreUI.textContent = playerScore;
    robotScoreUI.textContent = robotScore;
    humanPic.src="Skull.png"
    robotPic.src="Robot.png"
})