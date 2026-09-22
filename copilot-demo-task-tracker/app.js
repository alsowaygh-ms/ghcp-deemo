const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const taskCount = document.querySelector("#task-count");

let tasks = [];
let nextTaskId = 1;

function addTask(text) {
  const trimmedText = text.trim();
  if (!trimmedText) return false;

  tasks.push({ id: nextTaskId++, text: trimmedText, completed: false });
  renderTasks();
  return true;
}

function toggleTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  renderTasks(taskId);
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) return;

  tasks.splice(taskIndex, 1);
  const nextTask = tasks[taskIndex] || tasks[taskIndex - 1];
  renderTasks(nextTask?.id);
  if (!nextTask) taskInput.focus();
}

function renderTasks(focusTaskId) {
  taskList.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = task.completed ? "task completed" : "task";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `task-${task.id}`;
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const text = document.createElement("span");
    text.textContent = task.text;
    label.append(checkbox, text);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete task: ${task.text}`);
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(label, deleteButton);
    taskList.append(item);
  }

  emptyState.hidden = tasks.length > 0;
  const remaining = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remaining} remaining`;

  if (focusTaskId !== undefined) {
    document.getElementById(`task-${focusTaskId}`)?.focus();
  }
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!addTask(taskInput.value)) {
    taskInput.setCustomValidity("Enter a task, not just spaces.");
    taskInput.reportValidity();
    return;
  }

  taskInput.value = "";
  taskInput.focus();
});

taskInput.addEventListener("input", () => taskInput.setCustomValidity(""));

renderTasks();