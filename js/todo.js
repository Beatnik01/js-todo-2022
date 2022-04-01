const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // 문자열로 바꿔야 배열 형태로 저장됨
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //target=button / button의 parent는? li
  const li = event.target.parentElement;
  // li.id = string, toDo.id = Int 서로 type이 다르기 때문에 parseInt를 해주지 않으면 작동하지 않음
  // li.id가 string인 이유는 dom이 li의 id를 string으로 자동 변환해서 받아들이기 때문
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
  // filter를 통해 조건에 맞는 것들만 골라서 새롭게 배열을 만들고 마지막에 saveToDos function을 사용해 localStorage에 덮어씌움
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // localStorage에 저장된 걸 Object로 변경
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // array의 각각의 item에 대해 function을 실행하게 함
  parsedToDos.forEach(paintToDo);
}
