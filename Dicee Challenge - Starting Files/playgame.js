const play = document.querySelector("button");
let display = document.querySelector(".js-display");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


function playGame() {
  //set variable pick for playerOne and Two
  let player = Math.floor(Math.random() * 6) + 1;
  let computer = Math.floor(Math.random() * 6) + 1;
  let result = " ";

  //set condition to check who won the roll.
  if (player > computer) {
    result = "Player wins.";
  } else if (player < computer) {
    result = "Computer wins."
  } else if (player === computer) {
    result = "draw";
  }

  //set attributes to image to display the dice number
  img1.setAttribute("src", `images/dice${player}.png`);
  img2.setAttribute("src", `images/dice${computer}.png`);

  //set condition to display winner.

  if (result === 'Player wins.') {
    display.innerHTML = result;
  } else if (result === 'computer wins.') {
    display.innerHTML = result;
  } else if (result === 'draw') {
    display.innerHTML = result;
  }

}
  //set action to play button
  play.addEventListener("click",playGame);