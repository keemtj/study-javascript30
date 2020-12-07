// code
// const micBtn = document.querySelectorAll(".mic");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  if (transcript.includes("날씨")) {
    // api 연동해서 날씨체크 등 다양한 기능 구현을 할 수 있지않을까
    console.log("오늘의 날씨는 ~~입니다.");
  }

  console.log(transcript);
});

// let state = false;
// const micOnOff = (e) => {
//   // if (!e.target.matches(".mic")) return;
//   state = !state;
//   if (!state) {
//     recognition.start();
//   } else {
//     recognition.stop();
//   }
// };

recognition.addEventListener("end", recognition.start);

recognition.start();

// micBtn.forEach((btn) => btn.addEventListener("click", micOnOff));
