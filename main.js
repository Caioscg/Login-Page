const email = document.querySelector("#email")
const password = document.querySelector("#password")

email.addEventListener("focus", () => {
    email.style.borderColor = "#7895B2";
})
password.addEventListener("focus", () => {
    password.style.borderColor = "#7895B2";
})
email.addEventListener("blur", () => {
    email.style.borderColor = "#ccc";
})
password.addEventListener("blur", () => {
    password.style.borderColor= "#ccc";
})