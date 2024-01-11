const play = document.querySelector("button");
let display = document.querySelector(".js-display");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


function playGame() {
  //set variable pick for playerOne and Two
  let playOne = Math.floor(Math.random() * 6) + 1;
  let playTwo = Math.floor(Math.random() * 6) + 1;
  let result = " ";

  //set condition to check who won the roll.
  if (playOne > playTwo) {
    result = "Player1 wins.";
  } else if (playOne < playTwo) {
    result = "Player2 wins."
  } else if (playOne === playTwo) {
    result = "draw";
  }

  //set attributes to image to display the dice number
  img1.setAttribute("src", `images/dice${playOne}.png`);
  img2.setAttribute("src", `images/dice${playTwo}.png`);

  //set condition to display winner.

  if (result === 'Player1 wins.') {
    display.innerHTML = result;
  } else if (result === 'Player2 wins.') {
    display.innerHTML = result;
  } else if (result === 'draw') {
    display.innerHTML = result;
  }

}
  //set action to play button
  play.addEventListener("click",playGame);