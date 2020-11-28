// debugger
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}
/** debugger
 * DevTools(chrome inspector)
 * -> Click the Elements tab
 * -> Click right mouse button
 * -> break on
 * -> attribute modifications
 */

// Regular
console.log("hello");

// Interpolated
console.log("hello I am a %s string!", "POOP");

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn("HO NOOOO");

// Error :|
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2, "That is wrong!");

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// console.clear();

// Grouping together
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

dogs.forEach((dog) => {
  console.group(`group: ${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`group: ${dog.name}`);

  console.groupCollapsed(`groupCollapsed: ${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`groupCollapsed: ${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");
let getData = {};

const fetchData = () => {
  fetch("https://api.github.com/users/keemtj")
    .then((res) => res.json())
    .then((data) => (getData = data))
    .then(() => console.log("getData???", getData))
    .then(() => {
      console.timeEnd("fetching data");
    });
};
fetchData();

// table
console.table(dogs);
