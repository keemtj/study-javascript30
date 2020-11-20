// code
const inputs = document.querySelectorAll(".controls input");

const handleUpdate = ({ target }) => {
  const { dataset, name, value } = target;
  const suffix = dataset.sizing || "";

  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
