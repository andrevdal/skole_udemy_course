const colourSounds = {
    blue: new Audio("sounds/blue.mp3"),
    red: new Audio("sounds/red.mp3"),
    green: new Audio("sounds/green.mp3"),
    yellow: new Audio("sounds/yellow.mp3"),
  }  
let buttonColors = ["red", "green", "blue", "yellow"]
let gamePattern = []

function nextSequence (){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber]
    gamePattern.push(randomColor);
    $("#" + randomColor).fadeOut("fast").fadeIn("fast")
    Object.values(colourSounds)[randomNumber].play()
}
$(".btn").click(()=>{
    nextSequence();
    $(".btn").click((e)=>{
        console.log(e);
    })
})