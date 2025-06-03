let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");



let turn0=true;
 let winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
let disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

let resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
// let newbutton=()=>{
//     turn0=true;
//     enableboxes();
// }
resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click",resetgame);
    
boxes.forEach((box) => {
box.addEventListener("click",()=>{
    if(turn0==true){
        box.innerHTML="O";
        turn0=false;
        
    }
    else{
        box.innerHTML="X";
        turn0=true;
        
    }
    box.disabled=true;
    checkwinner();
});
});
let showwinner=(winner)=>{
  msg.innerHTML=`Congratulations! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};
let checkwinner=()=>{
    for(let pattern of winnerpattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
};