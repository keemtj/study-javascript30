const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// a, the, an은 정렬기준에서 제외한다
// a, the, an을 포함하는 문자가 있을 경우 정렬에서 제외될 수 있기 때문에
// 뒤에 공백문자 하나를 추가한다('a ', 'the ', 'an ')
const strip = (bandName) => bandName.replace(/^(a |the |an )/i, "").trim();

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

const ul = document.querySelector("#bands");

const render = () => {
  let list = "";
  sortedBands.forEach((band) => {
    list += `<li>${band}</li>`;
  });
  ul.innerHTML = list;
};

render();

// 단순히 주어진 band에 대해서 렌더만 하고싶을 때
// render함수 없이 바로 적용
// document.querySelector("#bands").innerHTML = sortedBands
//   .map((band) => `<li>${band}</li>`)
//   .join("");

console.log(sortedBands);
