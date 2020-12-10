// code
let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
};

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const ampm = hour > 12 ? "PM" : "AM";
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
};

const timer = (seconds) => {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const startTimer = (e) => {
  const seconds = parseInt(e.target.dataset.time, 10);
  timer(seconds);
};

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mins = parseInt(e.target.minutes.value, 10);
  const seconds = mins * 60;
  timer(seconds);
  e.target.reset();
});

// 1. document.forms 뒤에 custom객체나, 실제 form tag의 name속성의 값을 넣어준다
/**
 * <form name="customForm" id="custom">
    <input type="text" name="minutes" placeholder="Enter Minutes">
 * </form>
 */
// 2. 또는 form tag에 대해서는 바로 document에서 접근이 가능하다
// 대신 마찬가지로 실제 form tag의 name속성의 값을 넣어준다
// case1
console.log(document.forms.custom); // absolutely yes
console.log(document.forms.foo); // no
console.log(document.forms.customForm); // yes(attr name value)
// console.log(document.forms["customName"]);
// case2
console.log(document.bar); // no
console.log(document.customForm); // yes(attr name value)
// console.log(document["customName"]);
