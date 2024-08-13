class project {
  todoList;
  constructor(projectName) {
    this.projectName = projectName;
    this.todoList = [];
  }

  addTodo(todoItem) {
    this.todoList.push(todoItem);
  }
}

export { project };
