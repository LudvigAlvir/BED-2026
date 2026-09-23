/*
    For readability we store a reference to the button in a variable
*/
const changeTextButton = document.querySelector("#btn-change");
const h1 = document.querySelector("h1");

/*
    We change the text inside the h1 to be the text inside the input field
*/
function changeText() {
  const h1 = document.querySelector("h1");
  const input = document.querySelector("input");
  h1.textContent = input.value;
}

/*
    We use this variable (reference to the button) to
    add functionality when a user clicks on it
*/
changeTextButton.addEventListener("click", changeText);
/* 
Alternative way of writing it
changeTextButton.addEventListener("click", () => {
  changeText();
});
 */

/*
example without variables
*/
document.querySelector("#btn-color").addEventListener("click", () => {
  document.querySelector("h1").classList.add("text-blue");
});

/*
    How do we reset?
*/
const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.textContent = "Start text";
  h1.classList.remove("text-blue");
  document.querySelector("input").value = "";
});
