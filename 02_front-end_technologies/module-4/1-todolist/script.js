const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
  const ul = document.querySelector("ul");
  console.log(ul);
  // Make the created list element have the text from our input
  const value = document.querySelector("input").value;

  ul.innerHTML += "<li>" + value + "</li>"; // "<li>value from the input element</li>"
  addClickList(); // Need to "re-attach" listeners after setting innerHTML
  document.querySelector("input").value = "";
});

function addClickList() {
  const listElements = document.querySelectorAll("li"); // array of li elements
  listElements.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("done");
    });
  });
}

addClickList();
