const inputEl = document.querySelector("#validation-input")

console.log(inputEl.addEventListener("input", SymbolInput));
function SymbolInput(event) {
    const targetInput = event.currentTarget;
    const inputTargetLenght = targetInput.value.length;
    const validation = Number(targetInput.dataset.length);
    
    if (inputTargetLenght === validation) {
        targetInput.classList.replace("invalid", "valid");
    } else {
        targetInput.classList.add("invalid");
        targetInput.classList.remove("valid");
    }
}