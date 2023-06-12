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

// function color() {
//   if (document.getElementById("value").innerHTML > 0) {
//     document.getElementById("value").style.color = "green";
//   } else if (displayValue.innerText < 0) {
//     document.getElementById("value").style.color = "red";
//   } else {
//     document.getElementById("value").style.color = "grey";
//   }
// }

incrementButton.addEventListener("click", function () {
  displayValue.innerHTML =
    Number(displayValue.innerHTML) + Number(counter.value);
  const positive_animation = window.getComputedStyle(displayValue, "::after");
  positive_animation.style.animation = "positive 0.5s 2";
  // color();
});
decrementButton.addEventListener("click", function () {
  displayValue.innerHTML = Number(displayValue.innerHTML) - counter.value;
  // color();
});

resetBtn.addEventListener("click", function () {
  displayValue.innerHTML = 0;
  counter.value = 1;
  // color();
});
