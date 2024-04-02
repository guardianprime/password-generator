document.addEventListener("DOMContentLoaded", () => {
    const char = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]?|/";
    const passwordLength = 16;

    const generatePassword = () => {
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * char.length);
            password += char[randomNumber];
        }
        inputEl.value = password;
        alertContainerEl.innerText = `${password} Copied!`;
    };

    const copyPassword = () => {
        inputEl.select();
        inputEl.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(inputEl.value);
    };

    const btnEl = document.querySelector(".btn");
    const inputEl = document.querySelector(".input");
    const copyIconEl = document.querySelector(".fa-copy");
    const alertContainerEl = document.querySelector(".alert-container");

    btnEl.addEventListener("click", generatePassword);
    copyIconEl.addEventListener("click", () => {
        copyPassword();
        if (inputEl.value) {
            alertContainerEl.classList.remove("active");
            setTimeout(() => {
                alertContainerEl.classList.add("active");
            }, 3000);
        }
    });
});
