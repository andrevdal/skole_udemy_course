const colorSounds = {
    blue: new Audio("sounds/blue.mp3"),
    red: new Audio("sounds/red.mp3"),
    green: new Audio("sounds/green.mp3"),
    yellow: new Audio("sounds/yellow.mp3"),
  }  
let clickedPattern = []
let buttonColors = ["red", "green", "blue", "yellow"]
let gamePattern = []
let level = 0
let game = false

$("body").keypress(()=>{
    if(game == false){
        game = true
        nextSequence();
    }})

function checkAnswer (currentLevel, clickedColor){
    console.log(currentLevel);
    if(clickedColor == gamePattern[currentLevel]){
        console.log("yes");
        if(currentLevel == gamePattern.length){
            console.log("yes");
        }
    } else{
        console.log("no");
        game = false
    }
}
function nextSequence (){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber]
    $("h1").html("Level " + level)
    level++;
    gamePattern.push(randomColor);
    animatePress(randomColor);
    playSound(Object.values(colorSounds)[randomNumber]);
}
$(".btn").click((e)=>{
    if(game == true){
        let chosenColor = e.currentTarget.id;
        clickedPattern.push(chosenColor)
        playSound(colorSounds[chosenColor]);
        animatePress(chosenColor);
        checkAnswer(level - 1, chosenColor);
        nextSequence();
    }})
function animatePress (currentColor){
    $("#" + currentColor).fadeOut("fast").fadeIn("fast").addClass("pressed");
    setTimeout(() => $(`#${currentColor}`).removeClass("pressed"), 100)
}

function playSound (name){
    name.play()
}