var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

var guessInput = document.getElementById('guessInput');
var guessBtn = document.getElementById('guessBtn');
var feedback = document.getElementById('feedback');
var playAgainBtn = document.getElementById('playAgainBtn');

guessBtn.addEventListener('click', function() {
  var userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    feedback.style.color = 'red';
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = 'Congratulations! You guessed the correct number ' + randomNumber + ' in ' + attempts + ' attempts.';
    feedback.style.color = 'green';
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess > randomNumber) {
    feedback.textContent = 'Too high! Try again.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Too low! Try again.';
    feedback.style.color = 'red';
  }
});

playAgainBtn.addEventListener('click', function() {
  location.reload();
});