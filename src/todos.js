class todo {
  completedStatus;
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completedStatus = false;
  }
}

export {todo};
