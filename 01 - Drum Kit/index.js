const playSound = ({ keyCode }) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = ({ target, propertyName }) => {
  // 발생한 이벤트의 propertyName이 transform이 아니면 클래스리스트에서 'playing'을 제거하지 않겠다는 의미.
  // console.log(e);
  if (propertyName !== "transform") return;
  // 여기서 this는 window객체를 가리킴
  // this !== e.target
  // console.log('this:', this, 'e.target:', e.target);
  target.classList.remove("playing");
};

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   // 여기서 this는 key를 가리킴
//   // this === e.target
//   console.log(this === e.target);
//   this.classList.remove('playing');
//   // e.target.classList.remove('playing');
// }

// NodeList 객체는 유사배열 객체이기때문에 배열로 바꾸어줌
// Array.from or 스프레드
const keys = [...document.querySelectorAll(".key")];
// const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
