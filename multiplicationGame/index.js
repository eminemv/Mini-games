const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score) score=0;
scoreEl.innerText=`Score:${score}`;

questionEl.innerText=`What is ${num1} x ${num2}?`


formEl.addEventListener("submit", ()=>{
    let userAns = +inputEl.value;
    let correctAns = num1*num2;
    if(userAns===correctAns){
        score++;
        updateStorage();
    }
    else{
        score--;
        updateStorage();
    }
});
   
function updateStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}


