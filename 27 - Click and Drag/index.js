// code
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  // console.log(e.pageX, startX, slider.offsetLeft, slider.scrollLeft);
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  // 모든 이벤트에 대해서 해당 event의 기본동작을 실행하지 않도록 하는 것
  // 아래의 경우 text selection을 막으려는 시도
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({ x, startX });
  const walk = (x - startX) * 3;
  // console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
