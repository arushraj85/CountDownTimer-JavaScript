const daysEl = document.getElementById("days");
const HoursEl = document.getElementById("Hours");
const MinsEl = document.getElementById("Mins");
const SecondsEl = document.getElementById("Seconds");

const newYears = "1 Jan 2025";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  HoursEl.innerHTML = formatTime(hours);
  MinsEl.innerHTML = formatTime(minutes);
  SecondsEl.innerHTML = formatTime(seconds);
}

//it will display 0 before number if value is less than 10

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial Call

countdown();
setInterval(countdown, 1000);
