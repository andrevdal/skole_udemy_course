const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2")
const upperText = document.querySelector("h1")
function roll(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    img1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
    img2.setAttribute("src", "images/dice" + randomNumber2 + ".png")
    if(randomNumber1 > randomNumber2){
        upperText.innerHTML = "Player 1 Wins!"
    }else if(randomNumber1 === randomNumber2){
        upperText.innerHTML = "Draw!"
    }else{
        upperText.innerHTML = "Player 2 Wins!"
    }
}
roll()