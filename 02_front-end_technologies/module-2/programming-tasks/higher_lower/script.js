/*

    - Select the button   DONE
    - Add functionality to the button (eg: log out "button clicked" )

    - get the value from the input field
    - log out this value



*/
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const btnGuess = document.querySelector("#btn-guess");

let guesses = 0;

btnGuess.addEventListener("click", () => {
  guesses++;
  /*
  or:
  guesses = guesses + 1;
  guesses += 1; */
  const value = document.querySelector("#user-input").value;
  console.log(value);
  if (value < randomNumber) {
    alert("Få det høyere!");
  }
  if (value > randomNumber) {
    alert("Få det lavere!");
  }
  if (value == randomNumber) {
    alert("Lets go! perfekt! you go girl!" + "you used: " + guesses + " tries");
    guesses = 0;
    randomNumber = parseInt(Math.random() * 100 + 1);
  }
});

// Create a counter for how many guesses you have used
// When you guess correctly, display how many guesses it took
// When the user guesses correctly
// : reset the game
// reset amount of guesses
// generate new random number
