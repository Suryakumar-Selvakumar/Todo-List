class project {
  todoList;
  constructor(projectName) {
    this.projectName = projectName;
    this.todoList = [];
  }

  // Adds a todo object to the todoList array
  addTodo(todoItem, index) {
    // Only use index if it is explicitly a number
    if (typeof index === "number") {
      this.todoList[index] = todoItem; // Replace at the given index
    } else {
      this.todoList.push(todoItem); // Add to the end if index is not provided
    }
  }

  // Deletes a todo object from the todoList array
  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}

export { project };
