const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  /* console.log(username); */
  const password = document.querySelector("#password").value;
  /* console.log(password); */

  const email = document.querySelector("#email").value;

  // This one is wrong, fix it
  if (email.includes("@")) {
    alert("Email is inocrrect");
    return;
  }

  if (username.length < 3) {
    alert("Username must be 3 or more characters");
    return;
  }
  if (password.length < 6) {
    alert("Password must be longer than 6 characters");
    return;
  }

  if (password === password.toLowerCase()) {
    alert("Password need to have at least one upper and one lowercase letter");
    return;
  }

  console.log("You have registered");
  console.log("username: " + username);
  console.log("password: " + password);
});
/*
 All eventlisteneres has an "event" that can be passed into the function
*/
/* document.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  e.target.classList.toggle("blue");
});
 */
