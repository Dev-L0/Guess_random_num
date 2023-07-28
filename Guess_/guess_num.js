let btn1 = document.getElementById("btn1");
let output = document.getElementById("output");
let score = document.getElementById("score");
let guessno = document.getElementById("no_of_guess");
let random = Math.round(Math.random() * 100 + 1);
let no_of_guess = 0;
btn1.addEventListener("click", function () {
  let userguess = parseInt(document.getElementById("101p").value);
 
  if (isNaN(userguess) || userguess === '') {
    output.innerHTML = "Please enter a value";
    return;
  }
  else if (userguess > random) {
    output.innerHTML = "Your number is greater";
  } else if (userguess < random) {
    output.innerHTML = "Your number is lesser";
  } else {
    output.innerHTML = "You guessed it right!";
    btn1.disabled = true;
  }
  no_of_guess++;
  guessno.innerHTML = `No. of guesses: ${no_of_guess}`;
  score.innerHTML = `Score: ${100 - no_of_guess}`;
});
