const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  tiDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function saveToDo() {}

function paintingToDo(text) {
  console.log(text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintingToDo(currentValue);
  toDoInput.value = ""; //what is this?
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
