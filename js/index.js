// img 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1  ;
var diceimg1 = "images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",diceimg1);
//img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1  ;
var diceimg2 = "images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",diceimg2);
//title change
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins"
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
  }
  else{
    document.querySelector("h1").innerHTML = "Draw"
  }
