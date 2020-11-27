// code
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// https://mothereffinghsl.com
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
// need a starting X and Y and ending X and Y
// let lastX = 0;
// let lastY = 0;
let [lastX, lastY] = [0, 0];
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  hue %= 360;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // 마우스다운 이벤트가 일어난 시점에 e.offsetX, e.offsetY로 업데이트
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
