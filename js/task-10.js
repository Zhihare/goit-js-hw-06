function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlBut = document.getElementById("controls");
const createEl = document.getElementById("boxes");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]")
const inputNumbers = document.querySelector(".numDiv");

dataCreate.addEventListener("click", createBoxes());
dataDestroy.addEventListener("click", destroyBoxes());

function createBoxes(amount) {
  // console.dir(dataCreate);
  // console.dir(controlBut);

  if (inputNumbers.value === "" || inputNumbers.value > 100) {
    return 'Ввведіть кількість';
  }
  // else {
  //   let inputNum = inputNumbers.value;
  //   console.dir(inputNum)
  //   for (let i = 0; i < amount; i += 1) {
  //     const addEll = createEl.createElement("div")
  //   }
  // }
}

function destroyBoxes() {

}