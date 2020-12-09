// code
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");
const lis = document.querySelectorAll("li");

// logText
// ES6
const logText = (e) => {
  console.log(e.target.classList.value);
  // e.stopPropagation(); // stop bubbling
};

// ES5
// function logText(e) {
//   // console.log(this);
//   console.log(this.classList.value);
//   // e.stopPropagation(); // stop bubbling
// }

// capture: false(default)
// capture: top to bottom
// bubbling: bottom to top
divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: true })
);

// once: div.removeEventListener("click", logText);

button.addEventListener(
  "click",
  () => {
    console.log("click!!!");
  },
  { once: true }
);

lis.forEach((li) => li.addEventListener("click", logText));
