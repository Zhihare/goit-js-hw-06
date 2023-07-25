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
inputNumbers.addEventListener("input", nambersDiv());

let inputValue = 0;

function nambersDiv(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}
function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement('div');
    divElement.classList = 'item';
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = '30px';
    divElement.style.marginBottom = '30px';
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
    // divBoxesEl.appendChild(divElement);
  }
  return divBoxesEl.append(...divArray);
}

function destroyBoxesMarkup() {
  inputNumberEl.value = '';
  return (divBoxesEl.innerHTML = '');
}