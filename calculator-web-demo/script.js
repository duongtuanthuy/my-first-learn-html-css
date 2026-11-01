const displayEl = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (value === 'C') {
            displayEl.value = '';
        } else if (value === '=') {
            const expression = displayEl.value.replaceAll('x', '*');
            try {
                displayEl.value = eval(expression);
            } catch (error) {
                displayEl.value = 'ERROR';
            }
        } else if (button.id === 'backspace-btn') {
            displayEl.value = displayEl.value.slice(0, -1);
        } else {
            if (displayEl.value === 'NaN' || displayEl.value === 'ERROR') {
                displayEl.value = value;
            } else {
                displayEl.value += value;
            }
        }
    })
})