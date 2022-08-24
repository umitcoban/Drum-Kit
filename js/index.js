var buttons = document.querySelectorAll(".drum");

document.addEventListener("keydown", function(event){
    playDrumSet(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

for(var i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click",handleClick);
}

function handleClick(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    playDrumSet(this.textContent);
    buttonAnimation(this.textContent);
}

function playDrumSet(drumType){
    var audio = new Audio();
    switch(drumType){
        case "w":
            audio.src = "sounds/tom-1.mp3";
            break;
            case "a":
                audio.src = "sounds/tom-2.mp3";
                break;
                case "s":
                    audio.src = "sounds/tom-3.mp3";
                    break;
                    case "d":
                        audio.src = "sounds/tom-4.mp3";
                        break;
                        case "j":
                            audio.src = "sounds/snare.mp3";
                            break;
                            case "k":
                                audio.src = "sounds/crash.mp3";
                                break;
                                case "l":
                                    audio.src = "sounds/kick-bass.mp3";
                                    break;
                                    default:

    }
 
    audio.play();
}

function buttonAnimation(currentKey){
    var button = document.querySelector("."+currentKey);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
} 