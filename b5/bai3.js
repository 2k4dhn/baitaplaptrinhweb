// JavaScript code for Guess the Number game

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById("guessInput").value);

  // Check if the guess is correct
  if (userGuess >= 1 && userGuess <= 10) {
    if (userGuess === randomNumber) {
      displayResult("Chúc mừng bạn nổ hũ.");
    } else {
      displayResult("Niệm!!!");
    }
  } else {
    displayResult("Bạn có hiểu Tiếng Việt không ???.");
  }
}

function displayResult(message) {
  // Display the result message to the user
  document.getElementById("resultMessage").innerText = message;
}
