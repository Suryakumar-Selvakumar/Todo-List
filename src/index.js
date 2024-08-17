import { todo } from "./todos.js";
import { project } from "./projects.js";
import displayProject from "./projectDisplay.js";
import "./style.css";

const mainContent = document.querySelector(".main-content");

const projectsArray = [];
const inbox = new project("inbox");
projectsArray.push(inbox);

// TASK FORM
const taskForm = document.querySelector(".add-task-form");
const cancelTaskBtn = document.querySelector("#cancel");

const taskFormContainer = document.querySelector(".task-form-container");

// Event listener to make the add task form visible after clicking add task button
const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  taskForm.style.cssText = "visibility: visible;";
  taskFormContainer.style.cssText = "visibility: visible;";
  projectForm.style.cssText = "visibility: hidden;";
});

// Event listener to close the add task form upon clicking cancel
cancelTaskBtn.addEventListener("click", () => {
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
  taskFormContainer.style.cssText = "visibility: hidden";
});

// Event listener to submit add task form and get the formData
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(taskForm);
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
  taskFormContainer.style.cssText = "visibility: hidden";
});

// Creating a select dropdown, assigning the default option - "inbox" to it, then inserting it before the cancel button in add task form
const selectProjects = document.createElement("select");
selectProjects.setAttribute("name", "projects");
const projectDefaultOption = document.createElement("option");
projectDefaultOption.setAttribute("selected", "selected");
projectDefaultOption.setAttribute("value", "inbox");
projectDefaultOption.textContent = "inbox";
selectProjects.appendChild(projectDefaultOption);
cancelTaskBtn.insertAdjacentElement("beforebegin", selectProjects);

// Event listener to use the formData to call the todo constructor
taskForm.addEventListener("formdata", (e) => {
  const data = e.formData;
  const dataArray = [];
  let titleValue, dueDateValue, priorityValue, descriptionValue, projectValue;
  for (const value of data.values()) {
    dataArray.push(value);
  }

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

  //   Code to push todo into the currently selected project
  projectsArray.forEach((item) => {
    if (item.projectName === projectValue) {
      item.addTodo(todoObj);
      displayProject(projectsArray, projectValue);
    }
  });
});

// PROJECT FORM
const projectForm = document.querySelector(".add-project-form");
const projectFormContainer = document.querySelector(".project-form-container");

// Event listener to make the add project form visible after clicking the round + button
const addProjectBtn = document.querySelector("#add-project-btn");
addProjectBtn.addEventListener("click", () => {
  projectForm.style.cssText = "visibility: visible;";
  projectFormContainer.style.cssText = "visibility: visible;";
  taskForm.style.cssText = "visibility: hidden";
});

// Event listener to close the add project form upon clicking cancel
const cancelProjectBtn = document.querySelector("#cancel-project");
cancelProjectBtn.addEventListener("click", () => {
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
  projectFormContainer.style.cssText = "visibility: hidden;";
});

// Event listener that retrieves the formdata after clicking submit
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(projectForm);
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
  projectFormContainer.style.cssText = "visibility: hidden";
});

// Event listener that uses the formData to call the project constructor
const newProjectsContainer = document.querySelector(".new-projects-container");
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

  // Add newly created projects as options to the select dropdown
  const projectOption = document.createElement("option");
  projectOption.setAttribute("value", projectValue);
  projectOption.textContent = `${projectValue}`;
  selectProjects.appendChild(projectOption);

  // Add newly created projects as nav-items under myProjects
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-item");
  projectDiv.setAttribute("data-project-name", projectValue);
  projectDiv.textContent = `${projectValue}`;
  newProjectsContainer.appendChild(projectDiv);
});

// Event listener that displays the todos of a project upon clicking its nav button.
newProjectsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    const dataProjectName = event.target.getAttribute("data-project-name");
    displayProject(projectsArray, dataProjectName);
  }
});

// Event listener to display the inbox and its todos in the main-content area upon clicking its nav item.
const navBtnsOne = document.querySelector(".nav-btns-one");
navBtnsOne.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV" || event.target.tagName === "P") {
    const dataProjectName = event.target.getAttribute("data-project-name");
    displayProject(projectsArray, dataProjectName);
  }
});

const projectDiv = document.querySelector(".main-content");
projectDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo-div", "todo-extension-div")) {
    const dataTodoIndex = event.target.getAttribute("data-index");
    console.log(dataTodoIndex)
    document.querySelector(".todo-extension-div").style.cssText = "display: flex;"
  }
});
