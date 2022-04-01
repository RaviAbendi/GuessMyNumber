// selecting all the elements from the document and storing it in variables
const secretNumberEl = document.querySelector(".secret-number");
const guess = document.getElementById("guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const resultText = document.querySelector(".result-text");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");

// function to generate secret Number
const generateSecrectNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
// set score function
const setScore = function () {
  score--;
  // display the new score on the document
  scoreEl.textContent = score;
  if (score <= 0) {
    resultText.textContent = "You LOST !!!";
    // change the background color to red if you lose
    document.body.style.backgroundColor = "#6e0808";
  }
};

let secretNumber = generateSecrectNumber(); //Number
// secretNumberEl.textContent = secretNumber; //h2

// setting the score variable and highscore variable , because we also need a copy of score and highscore values to perform other tasks.
let score = 20;
let highScore = 0;

// setting score value of the variable to the score element (span tag)
scoreEl.textContent = score;

btnCheck.addEventListener("click", function (e) {
  // whatever we fetch from the DOM everything will be in string format
  const guessNumber = Number(guess.value);
  console.log(guessNumber);
  // if user wont enter anything then the guessNumber will be 0 because of typeCasting
  if (guessNumber === 0) {
    resultText.textContent = "Guess a number";
    // if guessNumber is equal to secretNumber then we will win the game
  } else if (guessNumber === secretNumber) {
    resultText.textContent = "You WON !!!";
    // change the background color to green once you won
    document.body.style.backgroundColor = "#69b32a";
    // display the secretNumber to show that you have guessed it correct
    secretNumberEl.textContent = secretNumber;
    // check if you have scored more than the previous game, if yes then set it as new high score.
    if (highScore < score) {
      highScore = score;
    }
    // display the high score on the document
    highScoreEl.textContent = highScore;
    // if the number guessed is higher than secretNumber then say that we have guessed a number too high
  } else if (guessNumber > secretNumber) {
    resultText.textContent = "Too High";
    // reduce the score value from 20 to 0 for each wrong guess
    setScore();
  } else if (guessNumber < secretNumber) {
    resultText.textContent = "Too Low";
    // reduce the score value from 20 to 0 for each wrong guess
    setScore();
  }
});

// resetting the game so the player can play the game once again without having to reload
btnAgain.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "#222";
  resultText.textContent = "Start Guessing.....";
  score = 20; //variable
  scoreEl.textContent = score;
  guess.value = ""; //input
  secretNumberEl.textContent = "?";
  secretNumber = generateSecrectNumber();
});
