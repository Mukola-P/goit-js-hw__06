const inputEl = document.querySelector("#name-input")
const outputEl = document.querySelector("#name-output");
const newValue = function (element) {
    if (element.target.value === "" || element.target.value === " ") {
      outputEl.textContent = "Anonymous";
      return;
    }
    outputEl.textContent=element.target.value
}
inputEl.addEventListener("input", newValue)