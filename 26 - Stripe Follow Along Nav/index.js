// code
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

const handleEnter = (e) => {
  console.log("ENTER!!");
  e.target.classList.add("trigger-enter");
  // e.target.classList.add("trigger-enter-active");
  // transition 효과를 위해

  // setTimeout(() => {
  //   e.target.classList.add("trigger-enter-active");
  // }, 150);

  setTimeout(() => {
    if (e.target.classList.contains("trigger-enter")) {
      e.target.classList.add("trigger-enter-active");
    }
  }, 150);

  background.classList.add("open");
  const dropdown = e.target.querySelector(".dropdown");
  // console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  // console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();
  // console.log(navCoords);

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate3d(${coords.left}px, ${coords.top}px, 0)`
  );
};

const handleLeave = (e) => {
  console.log("LEAVE!!");
  e.target.classList.remove("trigger-enter", "trigger-enter-active");

  background.classList.remove("open");
};

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
