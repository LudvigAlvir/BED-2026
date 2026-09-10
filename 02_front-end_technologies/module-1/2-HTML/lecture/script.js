function btnClick() {
  alert("btn clicked");
}
function btnClick2() {
  alert("btn clicked 2 function");
}
// This is the "old way", moodle uses this
const btn = document.getElementById("btn");
console.log(btn);
console.log(btn.id);
console.log(btn.className);
btn.onclick = btnClick;
btn.onclick = btnClick2; // first onclick is "overwritten"

// Modern way of selecting elements
const btn2 = document.querySelector("#btn-2");
console.log(btn2);
btn2.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick2); // both functions are added

