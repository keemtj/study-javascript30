const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

// textarea
msg.text = document.querySelector('[name="text"]').value;

const populateVoices = (e) => {
  voices = e.target.getVoices();
  const voiceOptions = voices
    // .filter((voice) => voice.lang.includes("en")) // 영어만 필터
    .filter((voice) => voice.name.includes("Google")) // Google lang만 필터
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
  voicesDropdown.innerHTML = voiceOptions;
};

// 전체 프로젝트에서 speak, cancel을 담당하는 함수
// startOver = false면 toggle만 되고 speak(msg)하지 않음
const toggle = (startOver = true) => {
  // select박스가 toggle되면 기존에 나오던 speak(msg)를 cancel()하고
  // toggle된 언어로 speak(msg)
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
};

const setVoice = (e) => {
  console.log(e.target.value);
  msg.voice = voices.find((voice) => voice.name === e.target.value);
  toggle();
};

const setOption = (e) => {
  console.log(e.target.name, e.target.value);
  msg[e.target.name] = e.target.value;
  toggle();
};

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));

speakButton.addEventListener("click", toggle);
// stopButton.addEventListener("click", toggle.bind(null, false));
stopButton.addEventListener("click", () => toggle(false));
