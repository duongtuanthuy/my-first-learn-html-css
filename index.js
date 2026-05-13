const numbers = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k"]
const synthetic = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", 
"d", "e", "f", "g", "h", "j", "k", "@", "!", "$", "%"]

let lengthOfPassword = 7
let passwordEd = ""
let passwordAnswer = document.getElementById("password-answer")

function generatePassword() {
    passwordEd = ""
    passwordAnswer.style.color = "white"
    passwordAnswer.style.fontSize = "20px"

    for (let i=0; i<lengthOfPassword; i++) {
        let randomIndex = Math.floor(Math.random() * synthetic.length)
        passwordEd += synthetic[randomIndex]
    }
    passwordAnswer.textContent = passwordEd
}

function resetPassword() {
    if (passwordEd === "") {
    passwordAnswer.textContent =
    "Cannot reset because a password has not been created."
    passwordAnswer.style.color = "red"
    passwordAnswer.style.fontSize = "15px"
    }
    else {
        passwordEd = ""
        passwordAnswer.textContent = passwordEd
    }
}

function copyPassword() {
    if (passwordEd !== "") {
    navigator.clipboard.writeText(passwordEd)
    passwordAnswer.style.color = "gray"
    passwordAnswer.style.fontSize = "15px"
    passwordAnswer.textContent = "\"" + passwordEd +
    "\" " + "has been saved to clipboard."
    }
    else {
    passwordAnswer.style.color = "gray"
    passwordAnswer.style.fontSize = "15px"
    passwordAnswer.textContent = "Create password to copy!!!"
    }
}