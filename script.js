const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createTask() {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
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


enterButton.addEventListener("click", addTaskAfterClick);

input.addEventListener("keypress", addTaskAfterKeypress);