// get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");

const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

// build out functions
const togglePlay = () => {
  console.log("now playing?", video.paused);
  const method = video.paused ? "play" : "pause";
  video[method]();
};

const updateButton = () => {
  console.log("Update the button");
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

const skip = (e) => {
  console.log("Skipping:", parseInt(e.target.dataset.skip, 10) + "s");
  video.currentTime += parseInt(e.target.dataset.skip, 10);
};

const handleRangeUpdate = (e) => {
  console.log("handleRange", e.target.name, e.target.value);
  video[e.target.name] = e.target.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  console.log("Progress", percent, "%");
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(scrubTime, video.currentTime);
  video.currentTime = scrubTime;
  console.log(scrubTime, video.currentTime);
};

// Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
skipButtons.forEach((button) => button.addEventListener("click", skip));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
