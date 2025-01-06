let gameSeq = [];
let userSeq = [];

let high = 0;
// let red = document.querySelector("#r");
// let green = document.querySelector("#g");
// let blue = document.querySelector("#b");
// let violet = document.querySelector("#v");

let body = document.querySelector("body");

let h = document.querySelector("h3");

let started = false;
let level = 0;

let arr = ["red","green","blue","violet"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        
    }
    

    levelUp();
});



function gameFlash(btn){
    btn.classList.add("flash");
    console.log("button flashed");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
}

function userFlash(btn){
    btn.classList.add("userFlash");
    // console.log("button flashed");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
    
}

function levelUp(){
    userSeq = [];
    level++;
    h.innerHTML = `Level ${level}`;
    
    //random button flash

    let randIndex = Math.floor(Math.random()*4);
    let randColor = arr[randIndex];

    let randbtn = document.querySelector(`.${randColor}`);

    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){
    

    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }else{
        if(level > high){
            high = level;
        }
        h.innerHTML = `Game over! Your score is <b>${level}</b> <br> Press any key to start. Highscore is ${high}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }

}


function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}