const inputText = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputText.addEventListener("input", fontSize);

function fontSize(e) {

    let size = e.target.value;

    spanText.style.fontSize = this.value + "px";
    console.log(size);
}