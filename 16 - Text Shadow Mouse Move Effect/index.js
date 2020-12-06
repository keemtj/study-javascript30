// code
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px;

const shadow = (e) => {
  // console.log(e);
  // hero 객체(div)의 offsetWidth, offsetHeight
  const { offsetWidth: width, offsetHeight: height } = hero;
  // console.log(width, height);
  // MouseEvent가 발생했을 때 그 객체에서 얻을 수 있는 property
  let { offsetX: x, offsetY: y } = e;
  // console.log(x, y);
  if (hero !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
};

hero.addEventListener("mousemove", shadow);
