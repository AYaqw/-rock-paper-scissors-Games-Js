const computerChooseDisplay=document.getElementById('computer-choose')
const userChooseDisplay=document.getElementById('user-choose')
const resultDisplay=document.getElementById('result')
const btns=document.querySelectorAll('button')
let result
let userChoose
let computerChoose
let comResult=0
let youResult=0

btns.forEach(btn=> btn.addEventListener('click',(e)=>{
  userChoose=btn.id //e.target
  computerChoose= computerChooseFun()
  userChooseDisplay.innerHTML=youResult
  computerChooseDisplay.innerHTML=comResult
  //resultDisplay.innerHTML='lost!!'
 /* console.log(Result())
  resultDisplay.innerHTML=Result()*/
  console.log(userChoose,computerChoose) 
  Result()
  computerChooseDisplay.innerHTML=comResult
  userChooseDisplay.innerHTML=youResult
}))
  


//let computerChoose=computerChooseFun()
function computerChooseFun(){
  randNo=Math.floor(Math.random()*3) //btns.lenght
  computerChoose =btns[randNo].id
  return computerChoose
 // resultDisplay==1?resultDisplay.innerHTML=rock:console.log('mo')
 
}

function Result(){
  /*if (userChoose === computerChoose){
    result=resul}t*/
  if(userChoose ==="paper"  && computerChoose=== "rock"){
    youResult+=1
  } if(userChoose==="scissor"  && computerChoose === "rock"){
    comResult+=1
  } if(userChoose ==="rock"  && computerChoose === "paper"){
    youResult+=1
  } if(userChoose ==="scissor"  && computerChoose === "paper"){
    youResult+=1
  } if(userChoose ==="rock"  && computerChoose === "scissor"){
    youResult+=1
  } if(userChoose ==="paper"  && computerChoose === "scissor"){
    comResult+=1
  }
 //return result
}










console.log('Hi')