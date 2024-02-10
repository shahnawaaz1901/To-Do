const inputBox = document.querySelector("#input-todo");
const todoContainer = document.querySelector(".todos");
const choices = document.querySelectorAll(".choices span");
const addBtn = document.querySelector("#plus");
const completedAllTaskButton = document.querySelector("#complete-all");
const removeCompleteTaskButton = document.querySelector("#remove-completed");
let numTodo = document.getElementById("task-count");
let currentChoice = choices[0];
let radioBtns;
let todos = [
  {
    completed: false,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: false,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: false,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: false,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const todoCount = todos.length;

for (let choice of choices) {
  choice.addEventListener("click", function (e) {
    makeSelectElementBold(this);
    renderTodoByChoice(this.getAttribute("id"));
  });
}

function renderTodoByChoice(id) {
  if (id == 0) {
    renderToDoList();
  } else if (id == 1) {
    let todo = todos.filter((v) => v.completed == false);
    renderToDoList(todo);
  } else {
    let todo = todos.filter((v) => v.completed == true);
    renderToDoList(todo);
  }
}

function makeSelectElementBold(element) {
  currentChoice.classList.remove("bold");
  element.classList.add("bold");
  currentChoice = element;
}

function renderTodo(todo, index) {
  const newElement = document.createElement("div");
  newElement.classList.add("todo");
  newElement.innerHTML = `<div class="select-btn">
  <input type="radio" id=${index} class="radio-btn" ${
    todo.completed ? "checked" : ""
  }/>
</div>
<div class="todo-task">
  ${todo.text}
</div>
<div class="operation-btn">
  <div class="delete-btn" onclick="deleteTodo(${index})">
    <i class="fa-solid fa-delete-left"></i>
  </div>
  <div class="update-btn" onclick="updateTodo(${index})">
    <i class="fa-regular fa-pen-to-square"></i>
  </div>
</div>`;
  todoContainer.appendChild(newElement);
}

function addTodo(todo) {
  todos.push(todo);
  renderToDoList();
}

function updateTodo(index) {
  const data = prompt("Update Todo", todos[index].text);
  if (data) {
    todos[index].text = data;
  }
  renderToDoList();
}

function deleteTodo(index) {
  const confirmation = confirm("Are you Sure you want to delete .?");
  if (confirmation) {
    todos.splice(index, 1);
    renderToDoList();
  }
}

addBtn.addEventListener("click", () => {
  if (inputBox.value) {
    addTodo({ completed: false, text: inputBox.value });
    inputBox.value = "";
  }
});

function renderToDoList(todo) {
  let todoList = todo || todos;
  todoContainer.innerHTML = "";
  let index = 0;
  for (let everyTodo of todoList) {
    renderTodo(everyTodo, index);
    index++;
  }
  numTodo.textContent = todoList.length;
  radioBtns = document.querySelectorAll(".select-btn > input");
  addEventListenerToRadio();
}

inputBox.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    if (inputBox.value) {
      addTodo({ completed: false, text: inputBox.value });
      inputBox.value = "";
    }
  }
});

completedAllTaskButton.addEventListener("click", (e) => {
  todos = todos.filter((v) => (v.completed = true));
  renderToDoList();
  console.log("Completed is Clicked");
});

removeCompleteTaskButton.addEventListener("click", (e) => {
  todos = todos.filter((v) => v.completed != true);
  console.log("Remove Button is Clicked");
  renderToDoList();
  makeSelectElementBold(choices[0]);
});

document.addEventListener("DOMContentLoaded", (e) => {
  makeSelectElementBold(choices[0]);
  renderToDoList();
});

function addEventListenerToRadio() {
  for (let every of radioBtns) {
    every.addEventListener("click", function (e) {
      console.log("click");
      const id = e.target.getAttribute("id");
      todos[id].completed = !todos[id].completed;
      renderToDoList();
    });
  }
}
