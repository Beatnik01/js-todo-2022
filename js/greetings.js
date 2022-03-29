const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

// 반복 사용하는걸 변수로 고정해 실수를 최소화
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

function onLoginBtnClick(event) {
  // preventDefault() event의 기본 동작들을 막음 ex) submit시 페이지 새로고침 방지
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // hidden class를 삭제해 loginform을 표시
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 그리고 EventListener 추가
  loginButton.addEventListener("click", onLoginBtnClick);
} else {
  paintGreetings(savedUsername);
  /* paintGreetings를 2번 사용하는 이유
    위에 있는 함수를 지우면 값을 입력했을때 아무것도 안보이고
    이 함수를 지우면 새로고침 했을때 아무것도 안보임
  */
}
