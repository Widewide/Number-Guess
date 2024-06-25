'use strict';
let number=document.querySelector(".guess");
let check=document.querySelector(".check");
let guess=document.querySelector(".guess");
let again=document.querySelector(".again");
let msg=document.querySelector(".message");
let score=document.querySelector(".score");
let highScore=document.querySelector(".highscore");
let intscore=20;
let finalNumber=Math.floor(Math.random()*20)+1;
console.log(finalNumber);
console.log(`this int scor ${intscore}`)
const stop=()=>{
    if(Number(highScore.innerHTML)<intscore){
        highScore.innerHTML=intscore;
    }
    document.querySelector("body").style.backgroundColor='#60b347'
    document.querySelector(".number").innerHTML=finalNumber;
}

const numberCheck=()=>{
const inputNumber=Number(guess.value);
console.log(inputNumber);
if(!inputNumber){
    msg.innerHTML="⛔️ No Number!"
}
else{
let currNumber=Number(inputNumber);
if(currNumber<finalNumber){
    msg.innerHTML="📉 Too Low!";
    intscore--;
    score.innerHTML=intscore;
}
else if(currNumber>finalNumber){
    msg.innerHTML="📈 Too High!";
    intscore--;
    score.innerHTML=intscore;
}
else if(currNumber==finalNumber){
    msg.innerHTML="🎉 Correct Number!";
    stop();
}

}
}
const reset=()=>{
let intscore=20;
let finalNumber=Math.floor(Math.random()*20)+1;
document.querySelector("body").style.backgroundColor='black';
document.querySelector(".number").innerHTML="?";
msg.innerHTML="guesss the number";
guess.value="";

}

check.addEventListener("click",numberCheck);
again.addEventListener("click",reset);