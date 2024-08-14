export default function displayProject(projectsArray, dataProjectName) {
  const mainContent = document.querySelector(".main-content");
  const projectDiv = document.createElement("div");
  const projectHeader = document.createElement("h1");

  projectsArray.forEach((element) => {
    if (element.projectName === dataProjectName) {
      mainContent.innerHTML = "";
      projectHeader.textContent = `${element.projectName}`;
      projectHeader.style.cssText =
        "text-align: center; text-transform: capitalize;";
      projectDiv.appendChild(projectHeader);
      element.todoList.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");
        todoDiv.setAttribute("data-index", element.todoList.indexOf(todo));
        const titlePara = document.createElement("p");
        const descriptionPara = document.createElement("p");
        const dueDatePara = document.createElement("p");

        titlePara.textContent = `${todo.title}`;
        descriptionPara.textContent = `${todo.description}`;
        dueDatePara.textContent = `${todo.dueDate}`;

        const priorityDiv = document.createElement("div");
        if (todo.priority === "p1") {
          priorityDiv.style.cssText =
            "width:50px; height:10px; background-color: rgb(200, 0, 0); border-radius: 7.5px;";
        } else if (todo.priority === "p2") {
          priorityDiv.style.cssText =
            "width:50px; height:10px; background-color: rgb(255, 187, 0); border-radius: 7.5px;";
        } else if (todo.priority === "p3") {
          priorityDiv.style.cssText =
            "width:50px; height:10px; background-color: rgb(0, 150, 0); border-radius: 7.5px;";
        } else {
          priorityDiv.style.cssText =
            "width:50px; height:10px; background-color: gray; border-radius: 7.5px;";
        }

        const todoFirstRow = document.createElement("div");
        todoFirstRow.append(titlePara, priorityDiv);

        const editTodoBtn = document.createElement("button");
        editTodoBtn.classList.add("edit-todo-btn");

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.classList.add("delete-todo-btn");

        const todoExtension = document.createElement("div");
        todoExtension.append(descriptionPara, editTodoBtn, deleteTodoBtn);

        todoDiv.append(todoFirstRow, dueDatePara, todoExtension);
        projectDiv.appendChild(todoDiv);
      });
      mainContent.appendChild(projectDiv);
      projectDiv.style.cssText =
        "display: flex; flex-direction: column; gap: 1rem;";
    }
  });
}
