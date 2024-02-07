console.log("Script is Connneted !!");

const inputBox = document.querySelector("input-todo");
const todoContainer = document.querySelector("todos");
const choices = document.querySelectorAll(".choices span");

let currentChoice = choices[0];
const deleteButtons = document.querySelectorAll("delete-btn");
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

// for(let every of deleteButtons){
//     every.addEventListener("click",(id)=>{
//         console.log(id)
//     })
// }

function deleteTodo(id) {
  console.log(id);
}
