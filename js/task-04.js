const incrementEl = document.querySelector("[data-action='increment']");
const decrementEl = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1
    counter.textContent = counterValue;
}

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);
