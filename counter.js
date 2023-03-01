"usestrict";

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const displayValue = document.getElementById("value");
const counter = document.getElementById("value-by");
let resetBtn = document.getElementById("reset");
counter.value = 1;
// function reset() {
//   displayValue = 0;
// }
// reset();

incrementButton.addEventListener("click", function () {
  displayValue.innerHTML =
    Number(displayValue.innerHTML) + Number(counter.value);
});
decrementButton.addEventListener("click", function () {
  displayValue.innerHTML = Number(displayValue.innerHTML) - counter.value;
});

resetBtn.addEventListener("click", function () {
  displayValue.innerHTML = 0;
  counter.value = 1;
});
