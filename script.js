const inputBox = document.querySelector("#input-todo");
const todoContainer = document.querySelector(".todos");
const choices = document.querySelectorAll(".choices span");
const addBtn = document.querySelector("#plus");
const deleteButtons = document.querySelectorAll("delete-btn");
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

function deleteTodo(id) {
  console.log(id);
}

function renderTodo(todo) {
  const newElement = document.createElement("div");
  newElement.classList.add("todo");
  newElement.innerHTML = `<div class="select-btn">
  <input type="radio" ${todo.completed ? "checked" : ""}/>
</div>
<div class="todo-task">
  ${todo.text}
</div>
<div class="operation-btn">
  <div class="delete-btn" onclick="deleteTodo(2)">
    <i class="fa-solid fa-delete-left"></i>
  </div>
  <div class="update-btn" onclick="updateTodo(Nothing)">
    <i class="fa-regular fa-pen-to-square"></i>
  </div>
</div>`;
  todoContainer.appendChild(newElement);
}

function addTodo(todo) {
  todos.push(todo);
  renderList();
}

addBtn.addEventListener("click", (e) => {
  if (inputBox.value) {
    console.log(inputBox.value);
    inputBox.value = "";
  }
});

function renderList() {
  todoContainer.innerHTML = "";
  for (let everyTodo of todos) {
    renderTodo(everyTodo);
  }
  numTodo.textContent = todos.length;
}
document.addEventListener("DOMContentLoaded", (e) => {
  makeSelectElementBold(choices[0]);
  renderList();
});
