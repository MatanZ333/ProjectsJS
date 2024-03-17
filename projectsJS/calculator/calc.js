const display = document.getElementById('display');
function displayOn(input) {
    display.value += input;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = '';
}

const clearOneButton = document.getElementById('clearOne');
clearOneButton.addEventListener("click", clearOne);

function clearOne() {
    const display = document.getElementById('display');
    const currentText = display.value;

    if (currentText.length > 0) {
        display.value = currentText.slice(0, -1)
    }
};


function clearOperand(char) {
    return ['+', '-', '*', '/'].includes(char); //it means that we need to check if those charaters are on the display
};
