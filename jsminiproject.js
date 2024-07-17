
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let gameseq=[];
let userseq=[];
let level=0;
let started=false;

let btns =["yellow","red","purple","green"];
document.addEventListener("keypress",()=>{  
    if(started==false)
        {
            console.log("game started");
            started=true;
            levelUp();
        }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`Level = ${level}`;
    // random button choose
    let randInx= Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randbtn =document.querySelector(`.${randColor}`);
  
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);
}





function checkAns(idx){
    // let idx=level-1;
    
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length===gameseq.length)
            {
                setTimeout(levelUp,1000);
            }
        console.log("correct");
    }
    else
    {
        // alert("Game Over! "+"Your total socre is "+`${level}`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        h3.innerHTML=`Game Over ! Your score was <b>${level}</b><br> Press any key to start again`;
        reset();
    }
}

function btnPress()
{
    let btn =this;
    userFlash(this);
    let userColor = this.classList[1];
    // console.log(userColor);
    console.log(userseq);
    console.log(gameseq);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns= document.querySelectorAll('.btn');
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    userseq=[];
    gameseq=[];
    started=false;
    level=0;
}
