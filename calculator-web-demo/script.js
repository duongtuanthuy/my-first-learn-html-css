const displayEl = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        console.log(value)
    })
})