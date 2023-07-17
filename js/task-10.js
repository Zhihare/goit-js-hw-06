function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlBut = document.getElementById("controls");
const createEl = document.getElementById("boxes");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]")

dataCreate.addEventListener("click", createBoxes());
dataDestroy.addEventListener("click", destroyBoxes());

function createBoxes(amount) {
  console.dir(dataCreate)
  for (let i = 0; i < amount; i += 1) {
    const addEll = createEl.createElement("div")
  }
}

function destroyBoxes() {

}