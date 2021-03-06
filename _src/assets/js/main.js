"use strict";

const btnShowInput = document.querySelector(".btn__footer");
const inputNewTask = document.querySelector(".new-task__input");
const btnAddTask = document.querySelector(".new-task__btn");
const tasksIncompleted = document.querySelector(".tasks__list-incompleted");
const tasksCompleted = document.querySelector(".tasks__list-completed");
const newTaskEl = document.querySelector(".new-task__wrapper");
const overlay = document.querySelector(".new-task__overlay");

let tasks = [];

const toggleClass = () => {
  newTaskEl.classList.toggle("hidden");
};

const showInputTask = () => {
  toggleClass();
};

const hideInputTask = () => {
  inputNewTask.value = "";
  newTaskEl.classList.add("hidden");
};

const addNewTask = () => {
  const valueTask = inputNewTask.value;
  if (valueTask.length > 0) {
    const newTask = {
      name: valueTask,
      completed: false
    };
    tasks.push(newTask);
    inputNewTask.value = "";
    saveLocalStorage(tasks);
    showTasks();
    toggleClass();
  }
};

const showTasks = () => {
  // Clean DOM
  tasksIncompleted.innerHTML = "";
  tasksCompleted.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    // Create li
    const liEl = document.createElement("li");
    liEl.classList.add("main__task");

    //  Create label
    const labelEl = document.createElement("label");
    labelEl.setAttribute("class", "main__task-label");
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

    // Distribute tasks in the list of completed and incompleted tasks
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
  saveLocalStorage(tasks);
  showTasks();
}

const checkLocalStorage = () => {
  if (localStorage.getItem("tasks") !== null) {
    if (localStorage.getItem("tasks").length > 0) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      showTasks();
    }
  }
};

const saveLocalStorage = tasks => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

checkLocalStorage();

btnShowInput.addEventListener("click", showInputTask);
btnAddTask.addEventListener("click", addNewTask);
overlay.addEventListener("click", hideInputTask);
