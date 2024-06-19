// script.js

let tasks = [];

function addTask(title, description, dueDate) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    completed: false,
  };

  tasks.push(task);
  renderTasks();
}

addTask("Task 1", "Description 1", "2021-09-01");

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;
    taskItem.appendChild(taskTitle);

    const taskDescription = document.createElement("div");
    taskDescription.textContent = task.description;
    taskItem.appendChild(taskDescription);

    const taskDueDate = document.createElement("div");
    taskDueDate.textContent = `Due: ${task.dueDate}`;
    taskItem.appendChild(taskDueDate);

    const taskButton = document.createElement("button");
    taskButton.classList.add("task-button");

    const taskIcon = document.createElement("i");
    taskIcon.classList.add("fas", "fa-trash", "delete-btn");
    taskButton.appendChild(taskIcon);

    taskButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskItem.appendChild(taskButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("task-button");

    const completeIcon = document.createElement("i");
    completeIcon.classList.add("fas", "fa-check", "complete-btn");
    completeButton.appendChild(completeIcon);

    completeButton.addEventListener("click", function () {
      task.completed = !task.completed;
      renderTasks();
    });

    taskItem.appendChild(completeButton);

    if (task.completed) {
      taskItem.style.textDecoration = "line-through";
    }

    taskList.appendChild(taskItem);
  });
}

function addTaskFrom(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;

  addTask(title, description, dueDate);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
}
