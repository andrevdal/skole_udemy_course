let allButtons = document.querySelectorAll(".drum")
let howManyButtons = document.querySelectorAll(".drum").length
let crash = new Audio('sounds/crash.mp3');
let snare = new Audio('sounds/snare.mp3');
let kick = new Audio('sounds/kick-bass.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");

for (i = 0; i < howManyButtons; i++){
    allButtons[i].addEventListener("click", (e) =>{
        let drumKey = e.target.innerHTML


        switch (drumKey) {
            case "w":
                crash.play()
            break;
        
            case "a":
                snare.play()
            break;

            case "s":
                kick.play()
            break;

            case "d":
                tom1.play()
            break;

            case "j":
                tom2.play()
            break;
            
            case "k":
                tom3.play()
            break;

            case "l":
                tom4.play()
            break;

            default:
                console.log(drumKey);
        }
        
    })
}