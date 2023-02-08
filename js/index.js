setInterval(setClock, 1000);

const seconds = document.querySelector("[data-seconds]");
const minutes = document.querySelector("[data-minutes]");
const hours = document.querySelector("[data-hours]");

function setClock() {
  const currentTime = new Date();
  const setSeconds = currentTime.getSeconds() / 60;
  const setMinutes = (setSeconds + currentTime.getMinutes()) / 60;
  const setHours = (setMinutes + currentTime.getHours()) / 12;

  setRatio(seconds, setSeconds);
  setRatio(minutes, setMinutes);
  setRatio(hours, setHours);
}

function setRatio(el, rotateRatio) {
  const setRotation = el.style.setProperty("--rotation", rotateRatio * 360);
}

setClock();
