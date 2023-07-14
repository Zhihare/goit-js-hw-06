const pass = document.getElementById("validation-input")

pass.addEventListener("blur", passDetect)

function passDetect(e) {
    const dataLen = e.target.dataset.length;
    const text = e.target.value.length;
    console.dir(e);
    console.log(dataLen)
    console.log(text)
    if (text == dataLen) {
        pass.classList.add("valid");
        pass.classList.remove("invalid");
    }
    else {
        pass.classList.add("invalid");
        pass.classList.remove("invalide");
    }
}
