console.log("JS");

$(document).ready(init);

const tasks = [];

function init() {
  //create listening events
  //button for Add Task
  $(".js-btn-newTask").on("click", addTaskToList);
}

function addTaskToList(event) {
  console.log("Task Added");

  const myTodoList = {
    name: $(".js-input-newTask").val(),
    completed: false
  };

  tasks.push(myTodoList);
  console.log("ToDo List:", tasks);

  $(".js-input-newTask").val("");
  render();
}

function render() {
  console.log("Render");
}
