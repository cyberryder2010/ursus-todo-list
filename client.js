console.log("JS");

$(document).ready(init);

const tasks = [];

function init() {
  //create listening events
  //button click for Add Task
  //button click for Complete
  $(".js-btn-newTask").on("click", addTaskToList);
  $(".js-todoListItems").on("click", ".js-btn-Complete", clickCompleteBtn);
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
  const $todoListItem = $(".js-todoListItems");
  console.log("Render");

  $todoListItem.empty();
  for (let i = 0; i < tasks.length; i++) {
    let completeBtn = `<button data-index="${i}" class="js-btn-complete">Complete</button`;

    if (tasks.completed === true) {
      completeBtn = `<button data-index="${i}" class="js-btn-complete"disabled>Complete</button`;
    }
    $todoListItem.append(`
      <li>
        ${tasks[i].name} ${completeBtn}
      </li>
    `);
  }
}
function clickCompleteBtn(event) {
  const itemIndex = $(this).data("index");
  console.log("Complete Click", itemIndex);
}
