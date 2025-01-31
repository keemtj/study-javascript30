// code
const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

const fixNav = () => {
  // console.log(topOfNav, window.scrollY);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
};

window.addEventListener("scroll", fixNav);
