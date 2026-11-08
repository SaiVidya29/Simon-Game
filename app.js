
let gameSeq=[];
let userSeq=[];
let buttons=["red","yellow","green","blue"];
let gameStart=false;
let level=0;
document.addEventListener("keypress",function(){
    if(gameStart==false){
        gameStart=true;
        console.log("game started");
        levelUp();
    }
    
});
let h2=document.querySelector("h2");
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let btnIdx=Math.floor(Math.random()*4);
    let btnColor=buttons[btnIdx];
    let randomBtn=document.querySelector(`.${btnColor}`);
    gameSeq.push(btnColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
    
}
function gameFlash(randomBtn){
    randomBtn.classList.add("flash");
    setTimeout(function(){
        randomBtn.classList.remove("flash");
    },500);
}
function userFlash(randomBtn){
    randomBtn.classList.add("user");
    setTimeout(function(){
        randomBtn.classList.remove("user");
    },250);
}
let btns=document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",function(){
        userFlash(this);
        let color=this.getAttribute("id");
        userSeq.push(color);
       checkAns(userSeq.length-1);
        //evelUp();

    })
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout( levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over your score is <b>${level}</b> press any key to start again`;
        restart();
    }
}
function restart(){
    gameSeq=[];
    userSeq=[];
    gameStart=false;
    level=0;
    document.body.classList.add("back");
    setTimeout(function(){
      document.body.classList.remove("back");
       },250);
}