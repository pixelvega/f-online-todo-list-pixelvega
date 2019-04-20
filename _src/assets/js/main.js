"use strict";
const btnShowInput = document.querySelector(".btn__footer");
const inputNewTask = document.querySelector(".new-task__input");
const btnAddTask = document.querySelector(".new-task__btn");
const tasksIncompleted = document.querySelector(".tasks__list-incompleted");
const tasksCompleted = document.querySelector(".tasks__list-completed");

let tasks = [];
let date = new Date();

const showInputTask = () => {};

const addNewTask = () => {
  const valueTask = inputNewTask.value;
  const newTask = {
    name: valueTask,
    completed: false
  };
  tasks.push(newTask);
  inputNewTask.value = "";
  showTasks();
};

const showTasks = () => {
  console.log(tasks);
  // Clean DOM
  tasksIncompleted.innerHTML = "";
  tasksCompleted.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    // Create li
    const liEl = document.createElement("li");
    liEl.classList.add("main__task");

    //  Create label
    const labelEl = document.createElement("label");
    labelEl.setAttribute("for", "task");
    labelEl.setAttribute("id", i);

    //  Create input
    const inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.setAttribute("name", "task");
    inputEl.setAttribute("class", "main__task-input");
    inputEl.setAttribute("value", tasks[i].name);
    inputEl.setAttribute("data-id", i);

    // Add Listener
    inputEl.addEventListener("change", checkTask);

    //  Attach elements
    labelEl.appendChild(inputEl);
    liEl.appendChild(labelEl);
    const newTask = document.createTextNode(tasks[i].name);
    labelEl.appendChild(newTask);

    // Distribute items in the list of completed and incomplete tasks
    if (tasks[i].completed) {
      inputEl.setAttribute("checked", tasks[i].completed);
      tasksCompleted.appendChild(liEl);
    } else {
      tasksIncompleted.appendChild(liEl);
    }
  }
  // // // Create ul, and Remove ul if (ul.length < 1)
};

function checkTask(e) {
  const indexEl = e.currentTarget.getAttribute("data-id");
  tasks[indexEl].completed = !tasks[indexEl].completed;

  showTasks();
}

btnShowInput.addEventListener("click", showInputTask);
btnAddTask.addEventListener("click", addNewTask);
