function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('.change-color');
let spanColor = document.querySelector('.color');

color.addEventListener("click", changeColor);

function changeColor() {
  spanColor.textContent = document.body.style.backgroundColor = getRandomHexColor();
}
