// 2. The following todoList has three tasks. Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.

// ```js
// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/3/2019 8:30",
//     completed: true
//   },
//   {
//     task: "Give JS Test",
//     time: "4/3/2019 10:00",
//     completed: false
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/3/2019 1:00",
//     completed: false
//   }
// ];
// ```

function TodoList(task,time,completed) {
    this.task = task;
    this.time = time;
    this.completed = completed;
}


var task01 = new TodoList("Prepare JS Test", "4/3/2019 10:00", true);

function addTask(){
    
}