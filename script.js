const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const iconEl = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector(".alert-container")
btnEl.addEventListener("click", () => {
    createPassword()
})

iconEl.addEventListener("click", () => {
    copyPassword()
    if (inputEl.value) {
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 2000);
    }
})
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]?:<>ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 16
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    inputEl.value = password
    alertContainerEl.innerText = password + " Copied!"
}

function copyPassword() {
    inputEl.select()
    inputEl.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputEl.value)
}