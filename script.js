const hourElTextEl = document.querySelector(".hourEl h1");
const minElTextEl = document.querySelector(".minEl h1");
const secElTextEl = document.querySelector(".secEl h1");
const meridianElTextEl = document.querySelector(".meridianEl h3");
const dayElTextEl = document.querySelector(".dayEl h1");

const timeUpdateFn = () => {
  const cTime = new Date();
  const hours = cTime.getHours();
  const minutes = cTime.getMinutes();
  const seconds = cTime.getSeconds();
  const meridian = hours >= 12 ? "pm" : "am";

  hourElTextEl.textContent = hours.toString().length == 1 ? `0${hours}` : hours;
  minElTextEl.textContent =
    minutes.toString().length == 1 ? `0${minutes}` : minutes;
  secElTextEl.textContent =
    seconds.toString().length == 1 ? `0${seconds}` : seconds;
  meridianElTextEl.textContent = meridian;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  dayElTextEl.textContent = weekday[cTime.getDay()];
};

window.addEventListener("load", () => {
  timeUpdateFn();
  setInterval(timeUpdateFn, 1000);
});
