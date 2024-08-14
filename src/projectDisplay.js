export default function displayProject(projectsArray, dataProjectName) {
  const mainContent = document.querySelector(".main-content");
  const projectDiv = document.createElement("div");
  const projectHeader = document.createElement("h1");

  projectsArray.forEach((element) => {
    if (element.projectName === dataProjectName) {
      mainContent.innerHTML = "";
      projectHeader.textContent = `${element.projectName}`;
      projectHeader.style.cssText = "text-align: center;"
      projectDiv.appendChild(projectHeader);
      element.todoList.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");
        todoDiv.setAttribute("data-index", element.todoList.indexOf(todo));
        const titlePara = document.createElement("p");
        const descriptionPara = document.createElement("p");
        const dueDatePara = document.createElement("p");
        const priorityPara = document.createElement("p");

        titlePara.textContent = `${todo.title}`;
        descriptionPara.textContent = `${todo.description}`;
        dueDatePara.textContent = `${todo.dueDate}`;
        priorityPara.textContent = `${todo.title}`;

        todoDiv.append(titlePara, descriptionPara, dueDatePara, priorityPara);
        projectDiv.appendChild(todoDiv);
      });
      mainContent.appendChild(projectDiv);
      projectDiv.style.cssText = "display: flex; flex-direction: column; gap:1rem;"
    }
  });
}
