let displayValue = '0';
let operator = null;
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function appendInput(digit) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '0';
    }
}

function calculateResult() {
    if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    displayValue = (firstOperand / secondOperand).toString();
                } else {
                    displayValue = 'Error';
                }
                break;
        }
        operator = null;
        firstOperand = null;
        updateDisplay();
    }
}

// Initial display update
updateDisplay();
