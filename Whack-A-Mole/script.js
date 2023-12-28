// look after all the elements that have 'square' on them
const squares = document.querySelectorAll(".square");
const badMole = document.querySelector(".badMole");
const goodMole = document.querySelector("goodMole");
const startGame = document.querySelector(".start-game");

// pick timer and the score elements
const timer = document.getElementById("timer");
const score = document.getElementById("score");

// boolean flag. always start with a boolean flag
let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;

const randomSquare = () => {
  // step 1. only one square pe moment can have the mole
  squares.forEach((square) => {
    square.classList.remove("badMole");
    square.classList.remove();
  });

  // step 2. get a random position
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("badMole");
  randomSquare.classList.add("goodMole");

  // step 3. add the mole (based on step 2's randomness)
  // randomSquare.classList.add("badMole");

  // get the id of the randomly chosen square
  // and put that inside the hit position
  hitPosition = randomSquare.id;
};

squares.forEach((square) => {
  // let's add an event listener for each square (which is an array)
  square.addEventListener("mousedown", () => {
    // add point with each click
    // we are getting the id of the square (from the html element)
    // and we compare it to the hitPosition
    // the hitPosition is set to be equal to the randomSquare's id (which we get from the other function)

    // if that is true (and they match), then return a point
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

const moveMoleAround = () => {
  // setInterval(function, timeInterval)
  timerId = setInterval(randomSquare, 500);
  currentTime--;
  timer.textContent = currentTime--;
};

const countDown = () => {
  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER. Your final score is " + result);
  }
};

let countDownTimerId = setInterval(countDown, 1000);

// moveMoleAround();
startGame.addEventListener("click", moveMoleAround);
