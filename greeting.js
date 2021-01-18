const form = document.querySelector(".js-form"),
  greeting = document.querySelector(".js-greetings"),
  input = form.querySelector("input");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //required????
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `HELLO! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //form.classList.add(SHOWING_CN);
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
