const zoomEl = document.querySelector("#font-size-control")
console.log(zoomEl);
const textEl = document.querySelector("#text")
console.log(textEl);

const handElUp = () => {
    textEl.style.fontSize = zoomEl.value + "px"
}

zoomEl.addEventListener("input", handElUp);