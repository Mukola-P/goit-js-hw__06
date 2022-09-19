const zoomEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

zoomEl.value = 16;
const handElUp = () => {
  textEl.style.fontSize = zoomEl.value + "px";
};
zoomEl.addEventListener("input", handElUp);
