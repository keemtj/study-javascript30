// code
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const hourDigit = document.querySelector(".hour");
const minuteDigit = document.querySelector(".min");
const secondDigit = document.querySelector(".second");

const setDate = () => {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = (second / 60) * 360;
  secondHand.style.transform = `rotate(${90 + secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360;
  minuteHand.style.transform = `rotate(${90 + minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${90 + hourDegrees}deg)`;

  hourDigit.innerText = hour < 10 ? "0" + hour : hour;
  minuteDigit.innerText = minute < 10 ? "0" + minute : minute;
  secondDigit.innerText = second < 10 ? "0" + second : second;
};

setInterval(setDate, 1000);
setDate();
