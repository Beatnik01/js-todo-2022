const clock = document.querySelector("h2#clock");

clock.innerText = "00:00";

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 첫 화면에 시간을 보여주기 위해 필요함, 이후 Interval이 1초마다 시간 갱신
getClock();

/* setInterval & setTimeout (실행하고자 하는 function, 간격(ms))
    Interval 일정 간격마다 실행 / Timeout 일정 시간이 지난 후 한 번 실행
*/
setInterval(getClock, 1000);
