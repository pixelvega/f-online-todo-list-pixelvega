//header

console.log("Hello world!");
const dateNumEl = document.querySelector(".header__date-day-num");
const dateNameEl = document.querySelector(".header__date-day-name");
const dateMonthYearEl = document.querySelector(".header__date-month-year");

dateNumEl.innerHTML = appDate.dayNumber;
dateNameEl.innerHTML = appDate.day;
dateMonthYearEl.innerHTML = `${appDate.month}, ${appDate.year}`;
