
const crashSound = new Audio('./sounds/crash.mp3');
const kickSound = new Audio('/sounds/kick-bass.mp3');
const tom1Sound = new Audio('./sounds/tom-1.mp3');
const tom2Sound = new Audio('/sounds/tom-2.mp3');
const tom3Sound = new Audio('/sounds/tom-3.mp3');
const tom4Sound = new Audio('/sounds/tom-4.mp3');
const snareSound = new Audio('/sounds/snare.mp3');


let btnLen = document.querySelectorAll(".drum").length;


//adding sound to click
for (let x = 0; x < btnLen; x++) {
  document.querySelectorAll(".drum")[x].addEventListener('click', function() {
    let buttonElement = this.innerText;
    playSound(buttonElement);

    addAnimation(buttonElement);
  });
}



//detecting keyboard press
document.addEventListener("keydown", (event) => {
 playSound(event.key);

 addAnimation(event.key)
})

function playSound(key) {
  switch (key) {
    case "w":
      snareSound.play();
      break;
    case "a":
      kickSound.play();
      break;
    case "s":
      tom1Sound.play();
      break;
    case "d":
      tom2Sound.play();
      break;
    case "j":
      tom3Sound.play();
      break;
    case "k":
      tom4Sound.play();
      break;
    case "l":
      crashSound.play();
      break;

    default:
  }
}

function addAnimation(currentkey) {
  let activeBtn = document.querySelector("." + currentkey);

  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  },100);
}