const inputBox = document.querySelector("#input-todo");
const todoContainer = document.querySelector(".todos");
const choices = document.querySelectorAll(".choices span");
const addBtn = document.querySelector("#plus");
const completedAllTaskButton = document.querySelector("#complete-all");
const removeCompleteTaskButton = document.querySelector("#remove-completed");
let numTodo = document.getElementById("task-count");
let currentChoice = choices[0];

const todos = [
  {
    completed: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    completed: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const todoCount = todos.length;

for (let choice of choices) {
  choice.addEventListener("click", function (e) {
    makeSelectElementBold(this);
  });
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
  <input type="radio" ${todo.completed ? "checked" : ""}/>
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

addBtn.addEventListener("click", (e) => {
  if (inputBox.value) {
    addTodo({ completed: false, text: inputBox.value });
    inputBox.value = "";
  }
});

function renderToDoList() {
  todoContainer.innerHTML = "";
  let index = 0;
  for (let everyTodo of todos) {
    renderTodo(everyTodo, index);
    index++;
  }
  numTodo.textContent = todos.length;
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
  console.log("Completed is Clicked");
});

removeCompleteTaskButton.addEventListener("click", (e) => {
  console.log("Remove Button is Clicked");
});

document.addEventListener("DOMContentLoaded", (e) => {
  makeSelectElementBold(choices[0]);
  renderToDoList();
});
