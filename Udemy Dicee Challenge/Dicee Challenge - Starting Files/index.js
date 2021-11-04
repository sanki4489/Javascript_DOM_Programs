let randomNumber1 = Math.floor(Math.random() * 6);
let arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".img1").src = arr[randomNumber1];
//document.querySelector(".img1").setAttribute = ("src", arr[randomNumber1]);
let randomNumber2 = Math.floor(Math.random() * 6);
document.querySelector(".img2").src = arr[randomNumber2];

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player2 wins";
}
