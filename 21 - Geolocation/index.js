// code
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading})`;
  },
  (e) => {
    console.error(e);
    alert("HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!");
  }
);
