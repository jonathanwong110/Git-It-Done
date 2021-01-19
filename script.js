const container = document.querySelector('.container');
const inputValue = document.querySelector('.user-input');
const addition = document.querySelector('.addition');

if (window.localStorage.getItem("tasks") == undefined) {
  const tasks = ["Make coffee", "Work on new project"];
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

const tasksStorage = window.localStorage.getItem("tasks");
const tasks = JSON.parse(tasksStorage);

class Task {
  constructor(name) {
    this.createTask(name);
  }

  createTask(name) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task');

    const input = document.createElement('input');
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add('task-input');

    const editTask = document.createElement('button');
    editTask.classList.add('edit');
    editTask.innerHTML = '<i class="fa fa-edit" style="font-size:24px"> </i>';
    editTask.addEventListener('click', () => this.editTask(input, name));

    const checkTask = document.createElement('button');
    checkTask.classList.add('check');
    checkTask.innerHTML = '<i class="fa fa-check" style="font-size:24px"> </i>';
    checkTask.addEventListener('click', () => this.checkTask(input, name));

    const removeTask = document.createElement('button');
    removeTask.classList.add('remove');
    removeTask.innerHTML = '<i class="fa fa-trash-o" style="font-size:24px"> </i>';
    removeTask.addEventListener('click', () => this.removeTask(taskBox, name));

    container.appendChild(taskBox);

    taskBox.appendChild(input);
    taskBox.appendChild(editTask);
    taskBox.appendChild(checkTask);
    taskBox.appendChild(removeTask);

  }

  editTask(input, name) {
    if (input.disabled == true) {
      input.disabled = !input.disabled;
    }
    else {
      input.disabled = !input.disabled;
      let indexof = tasks.indexOf(name);
      tasks[indexof] = input.value;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  checkTask(taskBox) {
    taskBox.classList.toggle('completed')
  }

  removeTask(taskBox, name) {
    taskBox.parentNode.removeChild(taskBox);
    let index = tasks.indexOf(name);
    tasks.splice(index, 1);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

addition.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
  if (e.which == 13) {
    check();
  }
})

function check() {
  if (inputValue.value != "") {
    new Task(inputValue.value);
    tasks.push(inputValue.value);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    inputValue.value = "";
  }
}


for (let i = 0; i < tasks.length; i++) {
  new Task(tasks[i]);
}