let storedValue = "";

function addToDisplay(num) {
  const display = document.querySelector("#display");
  display.value += num;
}

const numberButtons = document.querySelectorAll(".btn-number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addToDisplay(button.innerText);
  });
});

const addBtn = document.querySelector("#btn-add");
addBtn.addEventListener("click", () => {
  /*
    What do we have to do?
    - store the value
    - clear the display
*/
  const display = document.querySelector("#display");
  storedValue = display.value;
  display.value = "";
});

const equalsButton = document.querySelector("#btn-equals");

equalsButton.addEventListener("click", () => {
  const display = document.querySelector("#display");
  const value = display.value;
  const result = parseInt(storedValue) + parseInt(value);
  display.value = result;
});

const clearBtn = document.querySelector("#btn-clear");
clearBtn.addEventListener("click", () => {
  const display = document.querySelector("#display");
  display.value = "";
  storedValue = "";
});
