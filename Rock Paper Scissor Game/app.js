let userScore=0;
let compScore=0;
let draw=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userSco=document.querySelector("#user-score");
const compSco= document.querySelector("#comp-score");
const drawSco=document.querySelector("#draw");

const genCompChoice=()=>{
   const options=["rock","paper","scissor"];
   const randomIdx=Math.floor(Math.random()*3);
   return options[randomIdx];
}
const drawGame=()=>{
    console.log("Game Draw!");
    draw++;
    drawSco.innerText=draw;
    msg.innerText="Game Draw!"
    msg.style.backgroundColor="rgb(60, 92, 119)";
}
const showWinner=(userWin , userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userSco.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}.`
        msg.style.backgroundColor="green";
    }
    else 
    {
        console.log("You lose!")
        compScore++;
        compSco.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice)=>{
   console.log("User Choice= ",userChoice);
   const compChoice=genCompChoice();
   console.log("Comp Choice= ",compChoice);
   if(userChoice===compChoice){
    drawGame();
   }
   else { 
    let userWin=true;
    if(userChoice==="rock"){
        //scissor paper
        userWin = compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock scissor
        userWin = compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
