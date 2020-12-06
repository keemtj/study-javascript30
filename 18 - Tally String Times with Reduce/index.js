// code
const timeNodes = document.querySelectorAll("[data-time]");

console.log(timeNodes instanceof Array); // false

// 1. timeNodes 객체를 배열로 바꾸는 방법 2가지
// Array.from(timeNods) or [...timeNods]
// 2. reduce로 총합 구하기
// 3. total seconds
const seconds = [...timeNodes]
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    // const [mins, secs] = timeCode.split(":").map(function (str) {
    //   return parseFloat(str);
    // });
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    // console.log(mins, secs);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

// 4. hours, mins로 환산하고 남은 나머지 seconds에 대한 변수
let secondsLeft = seconds;
// 5. hours로 환산
const hours = Math.floor(secondsLeft / 3600);
// 6. 나머지를 secondsLeft에 재할당
secondsLeft %= 3600;
// 7. mins로 환산
const mins = Math.floor(secondsLeft / 60);
// 8. 나머지를 secondsLeft에 재할당
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
