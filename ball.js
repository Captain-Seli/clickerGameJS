`use strict`

// Player Class
// Target Class
// Function to draw circles -> CSS/HTML
// Movement Section
// Game Board Section
// Function for Difficulty Selection
// Title and Player inputs
// Display Current Player Name and Score
// Return Player Score
// Save Player Data
// Main Gameplay Loop
// Close Game Function

// Score and Highscore
let score = 0;
let highScore = 0;

function fn() {
  score++;
  console.log(score);
};

document.body.addEventListener(`click`, fn, true);

document.querySelector(`.score`).textContent = 0;
document.querySelector(`.highscore`).textContent = 0;

// Set Highscore
if (score > highScore) {
  highScore = score;
  document.querySelector(`.highscore`).textContent = highScore;
}



/*const id = setInterval(frame, 5);
document.querySelector(`.start`).addEventListener(`click`, function() {
  const elem = document.getElementById(`ball`);
  const pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + `px`;
      elem.style.left = pos + `px`;
    }
  }
})
*/