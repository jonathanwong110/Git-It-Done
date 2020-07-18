const enterButton = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const item = document.getElementsByTagName('li');

if (localStorage.getItem('tasks') == undefined){
  const tasks = [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
} else {
  let savedTasks = JSON.parse(localStorage.tasks)
  for (i = 0; i < savedTasks.length; i++) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(savedTasks[i]));
    ul.appendChild(li);

    function crossOut() {
      li.classList.toggle('done');
    }
  
    li.addEventListener('click',crossOut);
  
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTask);

    function deleteTask() {
      li.classList.add('delete')
      const deletableTask = document.getElementsByClassName('delete')
      for (i = 0; i < savedTasks.length; i++) {
        if (savedTasks[i] = deletableTask[0].innerText.slice(0, -2)) {
          let currentLocalStorage = JSON.parse(localStorage.tasks)
          currentLocalStorage = JSON.parse(localStorage.tasks).filter(e => e !== deletableTask[0].innerText.slice(0, -2))
          localStorage.setItem('tasks', JSON.stringify(currentLocalStorage))
        }
      }
      deletableTask[0].remove()
    }
  }
}

const tasksEX = localStorage.getItem('tasks');
const tasks = JSON.parse(tasksEX);

function createTask() {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.push(input.value)
  localStorage.setItem('tasks', JSON.stringify(savedTasks))
  input.value = '';

  function crossOut() {
		li.classList.toggle('done');
	}

	li.addEventListener('click',crossOut);

  var deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('X'));
  li.appendChild(deleteButton);
  deleteButton.addEventListener('click', deleteTask);

  function deleteTask() {
    li.classList.add('delete')
    const deletableTask = document.getElementsByClassName('delete')
    for (i = 0; i < savedTasks.length; i++) {
      if (savedTasks[i] = deletableTask[0].innerText.slice(0, -2)) {
        let currentLocalStorage = JSON.parse(localStorage.tasks)
        currentLocalStorage = JSON.parse(localStorage.tasks).filter(e => e !== deletableTask[0].innerText.slice(0, -2))
        localStorage.setItem('tasks', JSON.stringify(currentLocalStorage))
      }
    }
    deletableTask[0].remove()
  }
}

function inputLength() {
  return input.value.length;
}

function addTaskAfterClick() {
  if (inputLength() > 0) {
    createTask();
  } else {
    alert('You need to enter text in order to make an entry')
  }
}

function addTaskAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createTask();
  }
}


enterButton.addEventListener('click', addTaskAfterClick);

input.addEventListener('keypress', addTaskAfterKeypress);