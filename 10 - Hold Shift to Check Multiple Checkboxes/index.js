// code
// DOMs
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

/**
 * 1. 체크박스 클릭시 lastChecked = e.target 할당
 * 2. 체크박스 쉬프트+클릭시 loop실행
 * checkbox(index 0) === 쉬프트+체크박스 -> false
 * 또는
 * checkbox(index 0) === 체크박스(lastChecked) -> true -> true
 * inBetween = true;
 * -> checkbox.checked = true;
 *
 * checkbox(index 1) === 쉬프트+체크박스 -> false
 * 또는
 * checkbox(index 1) === 체크박스(lastChecked) -> false -> false
 * inBetween = true;(유지)
 * -> checkbox.checked = true;
 *
 * checkbox(index 2) === 쉬프트+체크박스 -> true
 * 또는
 * checkbox(index 2) === 체크박스(lastChecked) -> false -> true
 * inBetween = false;
 *
 * checkbox(index 3) === 쉬프트+체크박스 -> false
 * 또는
 * checkbox(index 3) === 체크박스(lastChecked) -> false -> false
 * inBetween = false;(유지)
 *
 * ...
 *
 * loop 종료
 */
