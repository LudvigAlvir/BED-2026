class TodoList {
  example = "example value"; // can put properties here
  constructor() {
    this.data = [];
  }
  add(title, description) {
    const item = new TodoItem(title, description);
    this.data.push(item);
  }
}

let currentId = 0;
class TodoItem {
  constructor(title, description) {
    currentId++;
    this.id = currentId;
    this.title = title;
    this.description = description;
    this.status = "active"; // active | done
  }
}

const todoList = new TodoList();
todoList.add("first", "first todo item");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#input-title").value;
  const description = document.querySelector("#input-description").value;
  todoList.add(title, description);
});

function displayItems() {
  const container = document.querySelector("#container-items");
  container.innerHTML = "";

  todoList.data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card", "mt-4");
    card.style.maxWidth = "500px";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.title;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = item.description;

    cardBody.append(cardTitle, cardText);
    card.append(cardBody);
    container.append(card);
  });
}
displayItems();

/* 
const data = JSON.parse(localStorage.getItem("todo"));
console.log(data[0].description); 
*/
