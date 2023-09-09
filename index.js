document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getDay();
  const currentUTCTime = Date.now();

  const currentDayElement = document.querySelector(
    "[data-testid=currentDayOfTheWeek]"
  );
  const currentUTCTimeElement = document.querySelector(
    "[data-testid=currentUTCTime]"
  );

  currentDayElement.textContent = daysOfWeek[currentDay];
  currentUTCTimeElement.textContent = currentUTCTime;
});
