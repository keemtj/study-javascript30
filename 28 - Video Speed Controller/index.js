// code
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

const handleSpeed = (e) => {
  // speed대신 e.target.offsetTop, e.target.offsetHeight는 계속적으로 target이 바뀌기 때문에 예외처리가 필요함
  const y = e.pageY - speed.offsetTop + 1;
  // 0 ~ 1 not 0 ~ 100%
  const percent = y / speed.offsetHeight;
  const min = 0.4; // 최소 0.4배속
  const max = 4; // 최대 4배속
  const height = Math.round(percent * 100) + "%";
  // 0.4 ~ 4
  const playbackRate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";

  video.playbackRate = playbackRate;
};

speed.addEventListener("mousemove", handleSpeed);

// this와 e.target
// function handleSpeed(e) {
//   console.log("this", this);
//   console.log("speed", speed);
// }
// speed.addEventListener("mousemove", handleSpeed);
