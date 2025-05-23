let boxes = document.querySelectorAll('.box')
let resetbtn= document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg= document.querySelector('#msg')

let turnO= true; //playerX ,playerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO= true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}

boxes.forEach((box)=>{
 box.addEventListener('click', ()=>{
    if(turnO){
        box.innerText ='O' //playerO turn
        turnO = false;
    }
    else{
        box.innerText ='X' // playerX turn
        turnO = true;
    }

    box.disabled = true;

    checkWinner();

 })
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinnwer= (winner) =>{
msg.innerText =(`Congratulations, Winner is ${winner} `);
msgContainer.classList.remove("hide");
} 


const checkWinner =()=>{
    for(let pattern of winPatterns){
    let pos1Val = boxes [pattern[0]].innerText;
    let pos2Val = boxes [pattern[1]].innerText;
    let pos3Val = boxes [pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinnwer(pos1Val);
        }
       /* else{
            msg.innerText =(`Sorry, there is no any Winner is `);
            msgContainer.classList.add("hide");
        }*/
    }

    }
}

newGameBtn.addEventListener('click' , resetGame)
resetbtn.addEventListener('click' , resetGame)