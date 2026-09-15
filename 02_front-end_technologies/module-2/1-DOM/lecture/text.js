const obj = {
  id: 1,
  value: "example",
};

console.log(obj.id);
const paragraph = document.querySelector("p");
console.log(paragraph);
console.log(paragraph.innerText);
/* paragraph.innerText = "New text from JavaScript";
 */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
/* paragraphs[2].innerText = "From JS!";
 */

/* for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerText = "From JS!";
}
 */

// When there is more or reusable logic in the function
function renameText(element) {
  element.innerText = "From JS!";
}
// When there is more or reusable logic in the function
paragraphs.forEach(renameText);

// least common
paragraphs.forEach(function (element) {
  element.innerText = "From forEach";
});

// Most common
paragraphs.forEach((element) => {
  element.innerText = "From forEach arrow function";
});
