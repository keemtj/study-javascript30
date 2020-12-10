const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

const startBtn = document.querySelector(".start");

let lastHole;
let timeUp = false;
let score = 0;

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

// eslint-disable-next-line no-shadow
const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log("ah nah thats the same on bud");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
};

const bonk = (e) => {
  // event가 사용자 행위에 의해 발생되었으면 true를 반환
  if (!e.isTrusted) return;
  score++;
  e.target.classList.remove("up");
  scoreBoard.textContent = score;
};

moles.forEach((mole) => mole.addEventListener("click", bonk));
startBtn.addEventListener("click", startGame);
