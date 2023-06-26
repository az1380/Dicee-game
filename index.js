var randomNum1 = Math.floor(Math.random()*6+1);
var randomNum2 = Math.floor(Math.random()*6+1);
document.querySelector("img.img1").setAttribute("src", "./images/dice"+ randomNum1 +".png" );
document.querySelector("img.img2").setAttribute("src", "./images/dice"+ randomNum2 +".png" );


if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent="player1 won!";
}

else if(randomNum2>randomNum1){
    document.querySelector("h1").textContent="player2 won!";
}
else{
    document.querySelector("h1").textContent="Draw";
}