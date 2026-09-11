---
header: "Lesson 2.1: DOM"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# DOM

---

## Selecting elements

```js
const getID = document.getElementById("myElement");
const queryID = document.querySelector("#myElement");
const elements = document.getElementsByClassName("myClass");
const queryElements = document.querySelectorAll(".myClass");
const tags = document.getElementsByTagName("div");
const queryTags = document.querySelectorAll("div");
```

---

## Manipulating elements

```js
const element = document.querySelector("#myElement");
element.innerHTML = "<p>New content</p>";
```

---

## Manipulating styles

```js
const element = document.querySelector("#myElement");
element.style.color = "blue";
```

---

## addEventListener

```js
const button = document.querySelector("#myButton"); //select the element
button.addEventListener(
  "click", // event we listen to
  () => {
    //function that runs when the event happens
    alert("Button clicked!");
  },
);
```

---

## Add event listener for multiple elements

```js
const elements = document.querySelectorAll(".myClass");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    alert("Element clicked!");
  });
});
```

---

## Add event listener for multiple elements

```js
const elements = document.querySelectorAll(".myClass");
elements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.style.color = "red";
  });
});
```

---

## Using form input values

```js
const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Important to prevent form submission
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  console.log(`Name: ${name}, Email: ${email}`);
});
```

---

## Adding two numbers from inputs
