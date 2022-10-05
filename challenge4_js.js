const clockTitle = document.querySelector(".js-clock");

function countingDate() {
  const date = new Date();
  const christDate = new Date("2022-12-25");
  const goalDate = christDate - date;
  const goalDay = Math.floor(goalDate / (1000 * 60 * 60 * 24));
  const goalHour = Math.floor((goalDate / (1000 * 60 * 60)) % 24);
  const goalMin = Math.floor((goalDate / (1000 * 60)) % 60);
  const goalSec = Math.floor((goalDate / 1000) % 60);
  clockTitle.innerText = `${String(goalDay).padStart(2, "0")}d ${String(
    goalHour
  ).padStart(2, "0")}h ${String(goalMin).padStart(2, "0")}m ${String(
    goalSec
  ).padStart(2, "0")}s`;
}
countingDate();
setInterval(countingDate, 1000);
