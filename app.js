let gameSeq=[];
let userSeq=[];
let started=0;
let level=0;
let btns=["pink","green","yellow","blue"];
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started==false){
  console.log("game started");
  started=true;
  levelUp();
  }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  },250);

}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function (){
    btn.classList.remove("userflash");
  },250);

}


function levelUp(){
  userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randomidx= Math.floor(Math.random()*3);
let randColor=btns[randomidx];
let randBtn = document.querySelector(`.${randColor}`);

gameSeq.push(randColor);


 btnFlash(randBtn);

}

function checkAns(idx){
  console.log("current level:", level);


if(userSeq[idx]=== gameSeq[idx]){
 if(userSeq.length == gameSeq.length){
 setTimeout(levelUp,1000);
 }
 

}else{
  h2.innerHTML =`Game Over! Your score was<b>${level}</b> <br> Press any key to start again.`;
reset();
}

}

function btnPress(){
  let btn =this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}


