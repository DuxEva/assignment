"use strict";
// Define tasks array
let tasks = [];

function addTask(title, description, dueDate) {
  const task = {
    title: title,
    description: description,
    dueDate: formatDate(dueDate),
    completed: false,
  };

  tasks.push(task);
  renderTasks();
}

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

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

    // Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("task-button", "edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editTask(index);
    });
    taskItem.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task-button", "delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });
    taskItem.appendChild(deleteButton);

    // Complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("task-button", "complete-btn");
    completeButton.textContent = task.completed
      ? "Mark Incomplete"
      : "Mark Complete";
    completeButton.addEventListener("click", function () {
      toggleComplete(index);
    });
    taskItem.appendChild(completeButton);

    if (task.completed) {
      taskItem.style.textDecoration = "line-through";
    }

    taskList.appendChild(taskItem);
  });
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;

  // Format the dueDate to match datetime-local input format (YYYY-MM-DDTHH:mm)
  const dueDate = new Date(task.dueDate);
  const formattedDueDate = dueDate.toISOString().slice(0, 16);
  document.getElementById("dueDate").value = formattedDueDate;

  // Change submit button to update button
  const submitButton = document.querySelector(".add-button");
  submitButton.textContent = "Update";
  submitButton.onclick = function () {
    updateTask(index);
  };
}

function updateTask(index) {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value.trim();

  if (title === "" || description === "" || dueDate === "") {
    alert("Please provide a title, description, and due date for the task.");
    return;
  }

  tasks[index].title = title;
  tasks[index].description = description;
  tasks[index].dueDate = formatDate(dueDate);

  renderTasks();

  resetForm();
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";

  // Reset update button to "Submit"
  const submitButton = document.querySelector(".add-button");
  submitButton.textContent = "Submit";
  submitButton.onclick = function (event) {
    addTaskFrom(event);
  };
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function addTaskFrom(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value.trim();

  // Validate inputs
  if (title === "" || description === "" || dueDate === "") {
    alert("Please provide a title, description, and due date for the task.");
    return;
  }

  addTask(title, description, dueDate);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
}

document.getElementById("taskForm").addEventListener("submit", addTaskFrom);

// Initial task added for demonstration
addTask("Task 1", "Description 1", "2023-06-20T12:00");
