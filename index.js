// modelo e-mail: /^.{2,}@.{2,}\.[a-zA-Z]{2,}$/ig
// modelo senha: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}/g

function validEmail(email) {
    if (
        !email.match(/^.{2,}@.{2,}\.[a-zA-Z]{2,}$/ig)
    ) {
        const err = new Error("E-mail inválido")
        err.input = "email"
        throw err
    } 
}

function validPassword(password) {
    if (
        !password.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}/g)
    ) {
        const err = new Error("Senha inválida")
        err.input = "password"
        throw err
    } 
}

function reset() {
    document.getElementById("email").classList.remove("success")
    document.getElementById("email").classList.remove("error")

    document.getElementById("password").classList.remove("success")
    document.getElementById("password").classList.remove("error")

    document.querySelector(`#email-error`).textContent = ""
    document.querySelector(`#password-error`).textContent = ""
}

const inputs = {}

inputs.email = document.getElementById("email")
inputs.password = document.getElementById("password")

document.getElementById("submit-btn").addEventListener("click", function (ev) {
    ev.preventDefault()
    reset()
    const emailValue = document.getElementById("email")
    const passwordValue = document.getElementById("password")

    try {
        validEmail(emailValue.value)
        emailValue.classList.add("success")
        validPassword(passwordValue.value)
        passwordValue.classList.add("success")
        alert("Usuário cadastrado!")
    } catch (err) {
        inputs[err.input].classList.add("error")
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})


