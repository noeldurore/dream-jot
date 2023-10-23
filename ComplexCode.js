/* 
   Filename: ComplexCode.js

   Description: This code is a complex implementation of a task management system using JavaScript.
                It incorporates multiple classes, data structures, and various functions to create
                a sophisticated and elaborate system.

   Note: This code is a contrived example and not meant to be practical or efficient.
*/

class Task {
   constructor(id, name, description, status) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.status = status;
   }

   updateStatus(newStatus) {
      this.status = newStatus;
   }
}

class TaskManager {
   constructor() {
      this.tasks = [];
   }

   addTask(task) {
      this.tasks.push(task);
   }

   removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
   }

   getTask(id) {
      return this.tasks.find(task => task.id === id);
   }

   getTasksByStatus(status) {
      return this.tasks.filter(task => task.status === status);
   }

   getAllTasks() {
      return this.tasks;
   }
}

const taskManager = new TaskManager();

taskManager.addTask(new Task(1, "Task 1", "Do something", "Pending"));
taskManager.addTask(new Task(2, "Task 2", "Do something else", "Completed"));
taskManager.addTask(new Task(3, "Task 3", "Do nothing", "Pending"));

console.log("All Tasks:", taskManager.getAllTasks());
console.log("Tasks by Status (Pending):", taskManager.getTasksByStatus("Pending"));

taskManager.getTask(2).updateStatus("In Progress");

console.log("All Tasks:", taskManager.getAllTasks());