import { todo } from "./todos.js";
import { project } from "./projects.js";
import "./style.css";

const projectsArray = [];
const inbox = new project("inbox");
projectsArray.push(inbox);

// TASK FORM
const taskForm = document.querySelector(".add-task-form");

// Event listener to submit add task form and get the formData
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(taskForm);
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
});

// Event listener to use the formData to call the todo constructor
taskForm.addEventListener("formdata", (e) => {
  const data = e.formData;
  const dataArray = [];
  let titleValue, dueDateValue, priorityValue, descriptionValue, projectValue;
  for (const value of data.values()) {
    dataArray.push(value);
  }
  console.log(dataArray);
  titleValue = dataArray[0];
  descriptionValue = dataArray[1];
  dueDateValue = dataArray[2];
  priorityValue = dataArray[3];
  projectValue = dataArray[4];
  const todoObj = new todo(
    titleValue,
    dueDateValue,
    priorityValue,
    descriptionValue,
    projectValue
  );

  //   Add code to push todo into the currently selected project
  projectsArray.forEach((item) => {
    if(item.projectName === projectValue)
  })
});

// Event listener to make the add task form visible after clicking add task button
const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  taskForm.style.cssText = "visibility: visible;";
});

// Event listener to close the add task form upon clicking cancel
const cancelTaskBtn = document.querySelector("#cancel");
cancelTaskBtn.addEventListener("click", () => {
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
});

// PROJECT FORM
const projectForm = document.querySelector(".add-project-form");

// Event listener to make the add project form visible after clicking the round + button
const addProjectBtn = document.querySelector("#add-project-btn");
addProjectBtn.addEventListener("click", () => {
  projectForm.style.cssText = "visibility: visible;";
});

// Event listener that retrieves the formdata after clicking submit
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(projectForm);
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
});

// Creating a select dropdown, assigning the default option - "inbox" to it, then inserting it before the cancel button in add task form
const selectProjects = document.createElement("select");
const projectDefaultOption = document.createElement("option");
projectDefaultOption.setAttribute("selected", "selected");
projectDefaultOption.textContent = "inbox";
selectProjects.appendChild(projectDefaultOption);
cancelTaskBtn.insertAdjacentElement("beforebegin", selectProjects);

// Event listener that uses the formData to call the project constructor and add newly created projects as options to the select dropdown
projectForm.addEventListener("formdata", (e) => {
  const data = e.formData;
  const dataArray = [];
  let projectValue;
  for (const value of data.values()) {
    dataArray.push(value);
  }
  projectValue = dataArray[0];
  const projectObj = new project(projectValue);
  projectsArray.push(projectObj);

  const projectOption = document.createElement("option");
  projectOption.setAttribute("value", projectValue);
  projectOption.textContent = `${projectValue}`;
  selectProjects.appendChild(projectOption);
});

// Event listener to close the add project form upon clicking cancel
const cancelProjectBtn = document.querySelector("#cancel-project");
cancelProjectBtn.addEventListener("click", () => {
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
});
