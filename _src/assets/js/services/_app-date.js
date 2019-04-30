//app-date
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

const appDate = { date, dayNumber, day, month, year };

document.appDate = appDate;
