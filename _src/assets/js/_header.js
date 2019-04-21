console.log("Hello world!");
const dateNumEl = document.querySelector(".header__date-day-num");
const dateNameEl = document.querySelector(".header__date-day-name");
const dateMonthYearEl = document.querySelector(".header__date-month-year");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const date = new Date();
const dayNumber = date.getDate();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const year = date.getFullYear();

dateNumEl.innerHTML = dayNumber;
dateNameEl.innerHTML = day;
dateMonthYearEl.innerHTML = `${month}, ${year}`;
