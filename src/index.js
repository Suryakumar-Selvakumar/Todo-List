import { todo } from "./todos.js";
import { project } from "./projects.js";
import displayProject from "./displayProject.js";
import "./style.css";
import {
  storeProjectsArray,
  retrieveProjectsArray,
  storeDateProjectsArray,
  retrieveDateProjectsArray,
} from "./localStorageModule.js";

const mainContent = document.querySelector(".main-content");

let projectsArray = [];
const inbox = new project("inbox");
projectsArray.push(inbox);

let dateProjectsArray = [];
const todayProj = new project("today");
const upcomingProj = new project("upcoming");
dateProjectsArray.push(todayProj, upcomingProj);

// Event listener to display the existing local Storage date upon page load/reload
document.addEventListener("DOMContentLoaded", (event) => {
  const lSProjectsArray = retrieveProjectsArray();

  lSProjectsArray.forEach((proj) => {
    projectsArray.forEach((item) => {
      if (item.projectName === proj.projectName) {
        item.todoList = [...proj.todoList];
      } else {
        const newProject = new project(proj.projectName);
        newProject.todoList = [...proj.todoList];
        projectsArray.push(newProject);

        const projectNavDiv = document.createElement("div");
        projectNavDiv.classList.add("project-item");
        projectNavDiv.setAttribute("data-project-name", proj.projectName);
        projectNavDiv.textContent = `${proj.projectName}`;
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.classList.add("delete-project-btn");
        deleteProjectBtn.setAttribute("data-project-name", proj.projectName);
        projectNavDiv.appendChild(deleteProjectBtn);
        newProjectsContainer.appendChild(projectNavDiv);

        const projectOption = document.createElement("option");
        projectOption.setAttribute("value", proj.projectName);
        projectOption.textContent = `${proj.projectName}`;
        selectProjects.appendChild(projectOption);
      }
    });
  });
});

let dataIndex;

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
const datePriorityDiv = document.querySelector(".date-priority");
datePriorityDiv.appendChild(selectProjects);

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
      if (dataIndex) {
        item.addTodo(todoObj, dataIndex);
        dataIndex = null;
      } else if (dataIndex === 0) {
        item.addTodo(todoObj, 0);
      } else {
        item.addTodo(todoObj);
      }
      storeProjectsArray(projectsArray);
      const lSProjectsArray = retrieveProjectsArray();
      displayProject(lSProjectsArray, projectValue);
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
  projectForm.style.cssText = "visibility: hidden;";
  projectFormContainer.style.cssText = "visibility: hidden;";
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
  const projectNavDiv = document.createElement("div");
  projectNavDiv.classList.add("project-item");
  projectNavDiv.setAttribute("data-project-name", projectValue);
  projectNavDiv.textContent = `${projectValue}`;
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.setAttribute("data-project-name", projectValue);
  projectNavDiv.appendChild(deleteProjectBtn);
  newProjectsContainer.appendChild(projectNavDiv);
});

// Event listener that displays the todos of a project upon clicking its nav button,
// and deletes the project and empties the mainContent upon clicking its delete button.
newProjectsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    const dataProjectName = event.target.getAttribute("data-project-name");
    storeProjectsArray(projectsArray);
    const lSProjectsArray = retrieveProjectsArray();
    displayProject(lSProjectsArray, dataProjectName);
    expandStatus = false;
  }

  if (event.target.tagName === "BUTTON") {
    const dataProjectName = event.target.getAttribute("data-project-name");
    projectsArray.forEach((proj) => {
      if (proj.projectName === dataProjectName) {
        projectsArray.splice(projectsArray.indexOf(proj), 1);
        storeProjectsArray(projectsArray);
        if (
          event.target.parentElement.getAttribute("data-project-name") ===
          dataProjectName
        ) {
          event.target.parentElement.innerHTML = "";
          mainContent.innerHTML = "";
        }
        for (const child of selectProjects) {
          if (child.getAttribute("value") === dataProjectName) {
            selectProjects.removeChild(child);
          }
        }
      }
    });
  }
});

// Event listener to display the expand button on mouseover
mainContent.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("todo-div")) {
    for (const child of event.target.children) {
      if (child.classList.contains("expand-btn")) {
        child.style.cssText = "visibility: visible;";
      }
    }
  }

  if (event.target.classList.contains("expand-btn")) {
    event.target.style.cssText = "visibility: visible;";
  }
});

// Event listener to hide the expand button on mouse out
mainContent.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("todo-div")) {
    for (const child of event.target.children) {
      if (child.classList.contains("expand-btn")) {
        child.style.cssText = "visibility: hidden";
      }
    }
  }

  if (event.target.classList.contains("expand-btn")) {
    event.target.style.cssText = "visibility: hidden;";
  }
});

// Event listener for the expand button to show the additional details of the task,
// edit & delete button for the task and completed toggle checkbox to  change it's completion status
let expandStatus = false;
mainContent.addEventListener("click", (event) => {
  if (event.target.classList.contains("expand-btn")) {
    for (const child of event.target.parentElement.children) {
      if (child.classList.contains("todo-extension-div")) {
        if (expandStatus === false) {
          child.style.cssText = "display: flex;";
          expandStatus = true;
        } else {
          child.style.cssText = "display: none;";
          expandStatus = false;
        }
      }
    }
  }

  if (event.target.classList.contains("edit-todo-btn")) {
    taskForm.style.cssText = "visibility: visible;";
    taskFormContainer.style.cssText = "visibility: visible;";
    projectForm.style.cssText = "visibility: hidden;";

    const dataEditBtn = event.target.getAttribute("data-edit-btn");
    dataIndex = dataEditBtn;
  }

  if (event.target.classList.contains("delete-todo-btn")) {
    const dataDeleteBtn = event.target.getAttribute("data-delete-btn");
    const dataProjectName = event.target.getAttribute("data-project-name");
    projectsArray.forEach((item) => {
      if (item.projectName === dataProjectName) {
        item.deleteTodo(dataDeleteBtn);
      }
      storeProjectsArray(projectsArray);
      const lSProjectsArray = retrieveProjectsArray();
      displayProject(lSProjectsArray, dataProjectName);
    });
  }

  if (event.target.classList.contains("completed-todo-btn")) {
    const index = event.target.getAttribute("data-completed-btn");
    const dataProjectName = event.target.getAttribute("data-project-name");
    projectsArray.forEach((item) => {
      if (item.projectName === dataProjectName) {
        if (
          event.target.checked &&
          item.todoList[index].completedStatus === false
        ) {
          item.todoList[index].completedStatus = true;
        } else if (item.todoList[index].completedStatus === true) {
          item.todoList[index].completedStatus = false;
        }
      }
      displayProject(projectsArray, dataProjectName);
    });
    storeProjectsArray(projectsArray);
    const lSProjectsArray = retrieveProjectsArray();
    displayProject(lSProjectsArray, dataProjectName);
  }
});

// Event listener to set the minimum date as today for the date input
const dueDate = document.getElementById("due-date");
dueDate.addEventListener("focus", () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("due-date").setAttribute("min", today);
});

// Event listener to display the inbox, today and upcoming and its todos in the main-content area upon clicking their respective nav item.
const navBtnsOne = document.querySelector(".nav-btns-one");
navBtnsOne.addEventListener("click", (event) => {
  if (event.target.classList.contains("inbox")) {
    const dataProjectName = event.target.getAttribute("data-project-name");
    storeProjectsArray(projectsArray);
    const lSProjectsArray = retrieveProjectsArray();
    displayProject(lSProjectsArray, dataProjectName);
    expandStatus = false;
  }

  if (event.target.classList.contains("today")) {
    todayProj.todoList = [];
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    projectsArray.forEach((proj) => {
      proj.todoList.forEach((item) => {
        if (item.dueDate == today) {
          todayProj.addTodo(item);
        }
      });
    });
    storeDateProjectsArray(dateProjectsArray);
    const lSDateProjectsArray = retrieveDateProjectsArray();
    displayProject(lSDateProjectsArray, "today");
    expandStatus = false;
  }

  if (event.target.classList.contains("upcoming")) {
    upcomingProj.todoList = [];
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    projectsArray.forEach((proj) => {
      proj.todoList.forEach((item) => {
        if (item.dueDate > today) {
          upcomingProj.addTodo(item);
        }
      });
    });
    storeDateProjectsArray(dateProjectsArray);
    const lSDateProjectsArray = retrieveDateProjectsArray();
    displayProject(lSDateProjectsArray, "upcoming");
    expandStatus = false;
  }
});

// Event listener to delete all todos
const footer = document.querySelector(".footer");
footer.addEventListener("click", () => {
  localStorage.clear();
  todayProj.todoList = [];
  upcomingProj.todoList = [];
  projectsArray.forEach(item => {
    item.todoList = [];
  })
  mainContent.innerHTML = "";
});
