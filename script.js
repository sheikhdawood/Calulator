// Get references to elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.btn:not(.operator)');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('btn-equals');
const clearButton = document.getElementById('btn-clear');

let currentInput = '';
let currentOperator = '';
let currentTotal = 0;

// Event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

// Event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            currentTotal = parseFloat(currentInput);
            currentInput = '';
            currentOperator = button.textContent;
        }
    });
});

// Event listener for equals button
equalsButton.addEventListener('click', () => {
    if (currentInput !== '') {
        const inputValue = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentTotal += inputValue;
                break;
            case '-':
                currentTotal -= inputValue;
                break;  
            case '*':
                currentTotal = currentTotal * inputValue;
                break;
            case '/':
                currentTotal = currentTotal / inputValue;
                break;        
            // Implement other cases for subtraction, multiplication, and division
        }
        currentInput = currentTotal.toString();
        display.textContent = currentInput;
    }
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    currentInput = '';
    currentOperator = '';
    currentTotal = 0;
    display.textContent = '0';
});
