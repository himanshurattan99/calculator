const buttons = document.getElementsByClassName('calculator-button');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');

const operators = ['+', '-', '*', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// To Count Brackets in Expression
const bracketsCount = {
    '(': 0,
    ')': 0,
}

// Adding Event Listeners To All The Calculator Buttons
Array.from(buttons).forEach((element) =>
    element.addEventListener('click', () => {
        // '=' Button : Evaluating Input Field Field Expression to Output Field
        if (element.innerHTML === '=') {
            try {
                outputField.innerHTML = '= ' + eval(inputField.value);
            }
            catch {
                outputField.innerHTML = 'Invalid Expression';
            }
        }
        // 'AC' Button : Clearing Expression
        else if (element.innerHTML === 'AC') {
            inputField.value = '';
            outputField.innerHTML = '';
            bracketsCount['('] = 0;
            bracketsCount[')'] = 0;
        }
        // '←' Button : Back Button
        else if (element.innerHTML === '←') {
            if (inputField.value.slice(-1) === '(' || inputField.value.slice(-1) === ')') {
                bracketsCount[inputField.value.slice(-1)]--;
            }
            inputField.value = inputField.value.slice(0, -1);
        }
        // '()' Button : Adding Brackets while validating Expression Syntax
        else if (element.innerHTML === '( )') {
            const lastToken = inputField.value.slice(-1);
            if (bracketsCount['('] > bracketsCount[')'] || bracketsCount['('] === 0) {
                if (bracketsCount['('] !== 0 && (digits.includes(lastToken) || lastToken === ')')) {
                    inputField.value += ')';
                    bracketsCount[')']++;
                }
                else if (inputField.value === '' || operators.includes(lastToken) || lastToken === '(') {
                    inputField.value += '(';
                    bracketsCount['(']++;
                }
            }
        }
        // Operator Buttons : Appending Operator while validating Expression Syntax
        else if (operators.includes(element.innerHTML)) {
            // If there is already an Operator just before
            if (!(operators.includes(inputField.value.slice(-1))) && inputField.value.slice(-1) !== '.') {
                inputField.value += element.innerHTML;
            }
        }
        // Digits and '.' Button : Adding Digits and Dot Operator (while validating Expression Syntax)
        else {
            if (element.innerHTML === '.') {
                if (digits.includes(inputField.value.slice(-1))) {
                    inputField.value += '.';
                }
            }
            else {
                inputField.value += element.innerHTML;
            }
        }
    }
    ));