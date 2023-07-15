

const form = document.querySelector(".login-form")

form.addEventListener("submit", dataUser)

function dataUser(e) {
    e.preventDefault();
    const email = form.elements.email.value;
    const pass = form.elements.password.value;
    if (email === '' || pass === '') {
        alert('Заповніть пусті поля!')
    }
    else {
        const saveMailPass = {
            email: [],
            password: [],
        }
        saveMailPass.email.push(email);
        saveMailPass.password.push(pass);
        form.reset();
        console.log(saveMailPass);
    }
    // console.dir(form);
    // console.log(email);
    // console.log(pass);



}

