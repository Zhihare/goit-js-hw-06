const conteiner = document.getElementById("categories");
const li = conteiner.children.length;
console.log(`Number of categories: ${li}`);

const liel = document.querySelectorAll(`h2`);
liel.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`)
})


