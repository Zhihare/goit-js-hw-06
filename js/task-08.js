const form = document.querySelector(".login-form")

form.addEventListener("submit", dataUser)

function dataUser(e) {
    e.preventDefault();
    console.dir(form);
}

