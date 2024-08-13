import { todo } from "./todos.js";
import { project } from "./projects.js";
import "./style.css";

const projectsArray = [];

const taskForm = document.querySelector(".add-task-form");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(taskForm);
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
});

taskForm.addEventListener("formdata", (e) => {
  const data = e.formData;
  const dataArray = [];
  let titleValue, dueDateValue, priorityValue, descriptionValue;
  for (const value of data.values()) {
    dataArray.push(value);
  }
  console.log(dataArray);
  titleValue = dataArray[0];
  descriptionValue = dataArray[1];
  dueDateValue = dataArray[2];
  priorityValue = dataArray[3];
  const todoObj = new todo(
    titleValue,
    dueDateValue,
    priorityValue,
    descriptionValue
  );
  console.log(todoObj);
});

const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  taskForm.style.cssText = "visibility: visible;";
});

const cancelTaskBtn = document.querySelector("#cancel");
cancelTaskBtn.addEventListener("click", () => {
  taskForm.reset();
  taskForm.style.cssText = "visibility: hidden";
});

const projectForm = document.querySelector(".add-project-form");
const addProjectBtn = document.querySelector("#add-project-btn");
addProjectBtn.addEventListener("click", () => {
  projectForm.style.cssText = "visibility: visible;";
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(projectForm);
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
});

projectForm.addEventListener("formdata", (e) => {
  const data = e.formData;
  const dataArray = [];
  let projectValue;
  for (const value of data.values()) {
    dataArray.push(value);
  }
  console.log(dataArray);
  projectValue = dataArray[0];
  const projectObj = new project(projectValue);
  console.log(projectObj);
  projectsArray.push(projectObj);
});

const cancelProjectBtn = document.querySelector("#cancel-project");
cancelProjectBtn.addEventListener("click", () => {
  projectForm.reset();
  projectForm.style.cssText = "visibility: hidden";
});
