export default function displayProject(projectsArray, dataProjectName) {
  const mainContent = document.querySelector(".main-content");
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
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
        titlePara.style.cssText = "font-size: 2rem;";
        descriptionPara.textContent = `${todo.description}`;
        dueDatePara.textContent = `${todo.dueDate}`;

        if (todo.priority === "p1") {
          todoDiv.style.cssText = "box-shadow: inset 1rem 0rem rgb(200, 0, 0);";
        } else if (todo.priority === "p2") {
          todoDiv.style.cssText = "box-shadow: inset 1rem 0 rgb(255, 187, 0);";
        } else if (todo.priority === "p3") {
          todoDiv.style.cssText = "box-shadow: inset 1rem 0 rgb(0, 150, 0);";
        } else {
          todoDiv.style.cssText = "box-shadow: inset 1rem 0 gray;";
        }

        const todoFirstRow = document.createElement("div");
        todoFirstRow.classList.add("todo-first-row");
        todoFirstRow.append(titlePara, dueDatePara);

        const editTodoBtn = document.createElement("button");
        editTodoBtn.classList.add("edit-todo-btn");
        editTodoBtn.setAttribute("type", "button");
        editTodoBtn.setAttribute(
          "data-edit-btn",
          element.todoList.indexOf(todo)
        );

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.setAttribute("type", "button");
        deleteTodoBtn.setAttribute(
          "data-delete-btn",
          element.todoList.indexOf(todo)
        );

        const completedCheckBox = document.createElement("input");
        completedCheckBox.classList.add("completed-todo-btn");
        completedCheckBox.setAttribute("type", "checkbox");
        completedCheckBox.setAttribute(
          "data-completed-btn",
          element.todoList.indexOf(todo)
        );
        if (todo.completedStatus === true) {
          completedCheckBox.checked = true;
        } else if (todo.completedStatus === false) {
          completedCheckBox.checked = false;
        }

        const todoExtension = document.createElement("div");
        todoExtension.classList.add("todo-extension-div");
        todoExtension.setAttribute("data-extension-index", element.todoList.indexOf(todo));
        todoExtension.style.cssText = "display: none;";
        todoExtension.append(
          descriptionPara,
          completedCheckBox,
          editTodoBtn,
          deleteTodoBtn
        );

        todoDiv.append(todoFirstRow, todoExtension);
        projectDiv.appendChild(todoDiv);
      });
      mainContent.appendChild(projectDiv);
    }
  });
}
