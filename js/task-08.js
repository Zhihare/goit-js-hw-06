

const form = document.querySelector(".login-form");
const saveMailPass = {};


form.addEventListener("submit", dataUser)

function dataUser(e) {
    e.preventDefault();
    const email = form.elements.email.value;
    const pass = form.elements.password.value;
    if (email === '' || pass === '') {
        alert('Заповніть пусті поля!')
    }
    else {
        saveMailPass.email = email.value;
        saveMailPass.password = pass.value;

        console.log(saveMailPass);
    }
    // console.dir(form);
    console.log(email);
    console.log(pass);
    form.reset();



}

