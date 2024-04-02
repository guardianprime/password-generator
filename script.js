const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector(".input")
const copyIconEl = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", () => {
    generatePassword()
})

copyIconEl.addEventListener("click", () => {
    copyPassword()
    if (inputEl.value) {
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 2000);
    }
})
function generatePassword() {
    const char = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]?|/"
    let password = ""
    const passwordLength = 16

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * char.length)
        password += char.substring(randomNumber, randomNumber + 1)
        console.log(randomNumber, password)
    }
    inputEl.value = password
    alertContainerEl.innerText = `${password} Copied!`
}

function copyPassword() {
    inputEl.select()
    inputEl.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputEl.value)
}