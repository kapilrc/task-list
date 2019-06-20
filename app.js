//define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // Add task event

  form.addEventListener("submit", addTask);
}

// Add task

function addTask(e) {
  if(taskInput.value === '') {
    alert("Add a task");
    return;
  }

  // create li element
  const li = document.createElement("li");
  
  // Add class
  li.className = "collection-item";

  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link el
  const link = document.createElement("a");

  // Add class
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>";

  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // clear input
  taskInput.value = "";

  e.preventDefault();
}