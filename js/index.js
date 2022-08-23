var buttons = document.querySelectorAll(".drum");

for(var i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click",handleClick);
}

function handleClick(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    playDrumSet(this.textContent);
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
                            audio.src = "sounds/tom-1.mp3";
                            break;
                            case "k":
                                audio.src = "sounds/tom-1.mp3";
                                break;
                                case "l":
                                    audio.src = "sounds/tom-1.mp3";
                                    break;
                                    default:

    }
 
    audio.play();
}