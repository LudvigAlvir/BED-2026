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

// add submit handling for the form
// it should log out the title and description
// when the form is submitted

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#input-title").value;
  const description = document.querySelector("#input-description").value;
  todoList.add(title, description);
});

/* localStorage.setItem("todo", JSON.stringify(todoList.data)); */
const data = JSON.parse(localStorage.getItem("todo"));
console.log(data[0].description);
