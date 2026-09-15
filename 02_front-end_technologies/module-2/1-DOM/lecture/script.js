// Modern way of selecting
const btn = document.querySelector("#btn-1");
console.log(btn);

// "Older" way iof selecting
/* const byId = document.getElementById("btn-1");
console.log(byId); */

btn.innerText = "alert user";
btn.style.backgroundColor = "white";
// when button is clicked, make an alert pop up
// hint: eventlistener / onclick
/* function alertUser() {
  alert("Hello!");
}

btn.onclick = alertUser; */

// easier to understand, maybe?
/* btn.onclick = function () {
  alert("Hello");
};
*/

btn.addEventListener("click", () => {
  const input = document.querySelector("#input-name");
  console.log(input);
  console.log(input.value);
  // When button is clicked, pop up "Hello: <NAME>"
  alert("Hello: " + input.value);
});
