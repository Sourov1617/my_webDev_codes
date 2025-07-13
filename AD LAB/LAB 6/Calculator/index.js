let firstNumber = '';
let currentOperator = '';
let secondNumber = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');
display.value = '0';

function appendNumber(number) {
    if (display.value === '0' || shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value += number;
    }
    
    if (currentOperator) {
        secondNumber = display.value;
    } else {
        firstNumber = display.value;
    }
}

function setOperation(operator) {
    if (firstNumber && secondNumber) {
        calculate();
    }
    currentOperator = operator;
    shouldResetDisplay = true;
    if (!firstNumber) {
        firstNumber = display.value;
    }
}

function calculate() {
    if (!firstNumber || !currentOperator || !secondNumber) {
        return;
    }

    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                clearAll();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    result = Math.round(result * 1000000) / 1000000;
    
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = '';
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = '0';
    firstNumber = '';
    currentOperator = '';
    secondNumber = '';
    shouldResetDisplay = false;
}