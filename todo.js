const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"); //ul tag

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //in local storage the datas can be saved only as a string so we need the JSON.stringfy...
}

function paintingToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button"); //create elements...
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  span.innerText = text; //the value of input will be here
  li.appendChild(delBtn);
  li.appendChild(span); //put created elements inside of li tag
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintingToDo(currentValue);
  toDoInput.value = ""; //this removes the inputed text after submit
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTodos = JSON.parse(loadedToDos);
    parsedTodos.forEach(function (toDo) {
      paintingToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
