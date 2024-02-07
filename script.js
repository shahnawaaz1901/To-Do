console.log("Script is Connneted !!");

const inputBox = document.querySelector("input-todo");
const todoContainer = document.querySelector("todos");
const choices = document.querySelectorAll(".choices span");

let currentChoice = choices[0];

for (let choice of choices) {
  choice.addEventListener("click", function (e) {
    makSelectElementBold(this);
  });
}
document.addEventListener("DOMContentLoaded", (e) => {
  makSelectElementBold(choices[0]);
});

function makSelectElementBold(element) {
  currentChoice.classList.remove("bold");
  element.classList.add("bold");
  currentChoice = element;
}
