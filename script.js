const inputBox = document.querySelector("#input-todo");
const todoContainer = document.querySelector(".todos");
const choices = document.querySelectorAll(".choices span");
const addBtn = document.querySelector("#plus");
const deleteButtons = document.querySelectorAll("delete-btn");

let currentChoice = choices[0];

const todos = [];
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
  console.log(todo);
}

function addTodo(todo) {
  todos.push(todo);
  todoContainer.innerHTML = "";
  for (let everyTodo of todos) {
    renderTodo(everyTodo);
  }
}

addBtn.addEventListener("click", (e) => {
  if (inputBox.value) {
    console.log(inputBox.value);
    inputBox.value = "";
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  makeSelectElementBold(choices[0]);
});
