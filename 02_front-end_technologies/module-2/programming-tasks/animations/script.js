const btnUp = document.querySelector("#btn-up");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const btnDown = document.querySelector("#btn-down");

// Using an object to store data related to that object
const box = {
  x: 0,
  y: 0,
};

btnUp.addEventListener("click", () => {
  const boxElement = document.querySelector(".box");
  // negative y values means going "up"
  box.y -= 50;
  boxElement.style.top = box.y + "px";
});

btnLeft.addEventListener("click", () => {
  const boxElement = document.querySelector(".box");
  // negative x values means going "left"
  box.x -= 50;
  boxElement.style.left = box.x + "px";
});

btnRight.addEventListener("click", () => {
  const boxElement = document.querySelector(".box");
  box.x += 50;
  boxElement.style.left = box.x + "px";
});

btnDown.addEventListener("click", () => {
  const boxElement = document.querySelector(".box");
  box.y += 50;
  boxElement.style.top = box.y + "px";
});

/* 
 // example for making the box move "automatically"
let interval;

btnUp.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const boxElement = document.querySelector(".box");
    box.y -= 5;
    boxElement.style.top = box.y + "px";
  }, 100);
});

btnLeft.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const boxElement = document.querySelector(".box");
    box.x -= 5;
    boxElement.style.left = box.x + "px";
  }, 100);
});

btnRight.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const boxElement = document.querySelector(".box");
    box.x += 5;
    boxElement.style.left = box.x + "px";
  }, 100);
});

btnDown.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const boxElement = document.querySelector(".box");
    box.y += 5;
    boxElement.style.top = box.y + "px";
  }, 100);
}); */
