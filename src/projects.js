class project {
  todoList;
  constructor(projectName) {
    this.projectName = projectName;
    this.todoList = [];
  }

  // Adds a todo object to the todoList array
  addTodo(todoItem) {
    this.todoList.push(todoItem);
  }
}

export { project };
