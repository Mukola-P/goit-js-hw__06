const NumberOfCategories = document.querySelectorAll(".item")
console.log(`Number Of Categories: ${NumberOfCategories.length}`);

const CategoryAnimals = document.querySelectorAll(".item")
CategoryAnimals.forEach((title) => {
   
    console.log(`
Category 🔵🌕 ${title.firstElementChild.textContent}
Elemants: ${title.lastElementChild.childElementCount}`);
});

