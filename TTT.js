let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");




let turnO = true; //playerX,playerO
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [0, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{

turnO=true;
enablebox();

}

enablebox=()=>{

    for(let box of boxes){
    
        box.disabled=false;
    box.innerText="";
    }
    
    }

disablebox=()=>{

for(let box of boxes){

    box.disabled=true;}

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   // console.log("Box was clicked...");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
checkwinner();  


});
});

showwinner=(winner)=>{

    msg.innerText=`Congratulation's,  Winnner is ${winner}`;
    msg.classList.remove("msg");
}


 const checkwinner = () => {

for(let pattern of winpatterns){
   // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
 if(pos1!="" && pos2!="" && pos3!="")
{
if(pos1===pos2 && pos2===pos3)
{
console.log("Winner...",pos1);
showwinner(pos1);
disablebox();
//showwinner.disabled=true;
}
}  }

 };


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



