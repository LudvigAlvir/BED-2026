class TodoList {
  constructor() {
    this.data = [];
    const localData = localStorage.getItem("todo-list");
    if (localData) {
      const data = JSON.parse(localData);
      data.forEach((item) => {
        const todoItem = new TodoItem(
          item.title,
          item.description,
          item.id,
          item.status,
        );
        this.data.push(todoItem);
      });
    }
  }
  add(title, description) {
    const item = new TodoItem(
      title,
      description,
      this.data[this.data.length - 1] + 1,
    );
    this.data.push(item);
  }
  save() {
    localStorage.setItem("todo-list", JSON.stringify(this.data));
  }
}

class TodoItem {
  constructor(title, description, id, status = "active") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status; // active | done
  }
}

const todoList = new TodoList();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#input-title").value;
  const description = document.querySelector("#input-description").value;
  todoList.add(title, description);
  displayItems();
});

function displayItems() {
  const container = document.querySelector("#container-items");
  container.innerHTML = "";

  todoList.data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card", "mt-4");
    card.style.maxWidth = "500px";
    if (item.status == "done") {
      card.classList.add("bg-secondary");
    }

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.title;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = item.description;

    const btnDone = document.createElement("button");
    btnDone.classList.add("btn");
    if (item.status == "active") {
      btnDone.classList.add("btn-success");
    } else {
      btnDone.classList.add("btn-light");
    }
    btnDone.textContent = item.status;
    btnDone.addEventListener("click", () => {
      if (item.status == "done") {
        item.status = "active";
      } else {
        item.status = "done";
      }

      displayItems();
    });

    cardBody.append(cardTitle, cardText, btnDone);
    card.append(cardBody);
    container.append(card);
  });
}
displayItems();

document.querySelector("#btn-save").addEventListener("click", () => {
  todoList.save();
});

/* 
const data = JSON.parse(localStorage.getItem("todo"));
console.log(data[0].description); 
*/
