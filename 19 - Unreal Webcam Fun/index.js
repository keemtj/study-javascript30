// code
const video = document.querySelector(".player");
const shoot = document.querySelector(".shoot");
const capture = document.querySelector(".capture");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      //  DEPRECIATION :
      //  The following has been depreceated by major browsers as of Chrome and Firefox.
      //  video.src = window.URL.createObjectURL(localMediaStream);
      //  Please refer to these:
      //  Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      //  Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((e) => {
      console.error(`OH NO!!!`, e);
    });
};

const redEffect = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
};

const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
};

// const greenScreen = (pixels) => {
//   const levels = {};
//   document.querySelectorAll(".rgb input").forEach((input) => {
//     levels[input.name] = input.value;
//   });

//   // for (let i = 0; i < pixels.data.length; i += 4) {
//   //   red = pixels.data[i + 0];
//   //   green = pixels.data[i + 1];
//   //   blue = pixels.data[i + 2];
//   //   alpha = pixels.data[i + 3];

//   //   if (
//   //     red >= levels.rmin &&
//   //     green >= levels.gmin &&
//   //     blue >= levels.bmin &&
//   //     red <= levels.rmax &&
//   //     green <= levels.gmax &&
//   //     blue <= levels.bmax
//   //   ) {
//   //     // take it out!
//   //     pixels.data[i + 3] = 0;
//   //   }
//   // }

//   return pixels;
// };

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // console.log(pixels);

    // mess with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.1;

    // pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
};

const takePhoto = () => {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
};

let shootState = false;

const toggleWebcam = (e) => {
  if (!shootState) {
    getVideo();
    e.target.textContent = "Webcam pause";
    shootState = true;
  } else {
    video.pause();
    e.target.textContent = "Webcam start";
    shootState = false;
  }
};

video.addEventListener("canplay", paintToCanvas);
shoot.addEventListener("click", toggleWebcam);
capture.addEventListener("click", takePhoto);
