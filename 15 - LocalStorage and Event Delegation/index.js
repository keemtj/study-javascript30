const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// if there is something in localStorage, it gets items
// otherwise it fall back to an empty array
const items = JSON.parse(localStorage.getItem("items")) || [];

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map(
      (plate, i) => `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done && "checked"
      }/>
      <label for="item${i}">${plate.text}</label>
    </li>
    `
    )
    .join("");
};

const addItem = (e) => {
  e.preventDefault();
  const text = e.target.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  // into localStorage
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
};

const toggleDone = (e) => {
  // 1. 이벤트 2개 발생
  // 2. 이벤트 2개 발생하는 이유
  // label, input 태그에서 이벤트 발생
  // 3. skip this unless it's an input
  if (!e.target.matches("input")) return;
  const el = e.target;
  const { index } = el.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
