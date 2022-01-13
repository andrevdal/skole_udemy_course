const colorSounds = {
    red: new Audio("sounds/red.mp3"),
    green: new Audio("sounds/green.mp3"),
    blue: new Audio("sounds/blue.mp3"),
    yellow: new Audio("sounds/yellow.mp3"),
  }  
let errorSound = new Audio("sounds/wrong.mp3")
let buttonColors = ["red", "green", "blue", "yellow"]
let clickedPattern = []
let gamePattern = []
let level = 0
let game = false
let nrClicked = 0

$("body").keypress(()=>{
    if(game == false){
        game = true
        nextSequence();
    }})

function checkAnswer (currentLevel){
    if(gamePattern[currentLevel] === clickedPattern[currentLevel]){
        if(clickedPattern.length === gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            }, 1000)
        }
    } else{
        console.log("noob");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over")
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart")
        errorSound.play();
        level = 0
        gamePattern = []
        clickedPattern = []
        game = false
    }
}
function nextSequence (){
    clickedPattern = []
    nrClicked = 0
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber]
    level++;
    $("h1").html("Level " + level)
    gamePattern.push(randomColor);
    animatePress(randomColor);
    playSound(Object.values(colorSounds)[randomNumber]);
}
$(".btn").click((e)=>{
    if(game == true){
        nrClicked++;
        let chosenColor = e.currentTarget.id;
        clickedPattern.push(chosenColor)
        playSound(colorSounds[chosenColor]);
        animatePress(chosenColor);
        checkAnswer(nrClicked - 1, chosenColor);
    }})
function animatePress (currentColor){
    $("#" + currentColor).fadeOut("fast").fadeIn("fast").addClass("pressed");
    setTimeout(() => $(`#${currentColor}`).removeClass("pressed"), 100)
}

function playSound (name){
    name.play()
}