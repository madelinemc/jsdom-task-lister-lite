document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const taskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");


//prevent post request from being made when user presses submit of form
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = document.querySelector("#new-task-description").value; //the value of what the user types in

  taskList.innerHTML += `<li> ${newTask} <button data-action = "delete"> X </button></li>`; //add user typed in value to the list, delete button

  taskForm.reset(); //resets the form (clears text) each time a task is submitted

});

taskList.addEventListener("click", function (e) { //listening for user to click X to delete
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
});