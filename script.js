const buttons = document.getElementsByClassName('calculator-button');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');

const operators = ['+', '-', '*', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// To Count Brackets In Expression
const bracketsCount = {
    '(': 0,
    ')': 0,
}

// Adding Click Event Listeners To All The Calculator Buttons
Array.from(buttons).forEach((element) =>
    element.addEventListener('click', () => {
        // Storing The Last Entered Token In Input Field
        let lastToken = inputField.value.slice(-1);
        // '=' Button : Evaluating Input Field Field Expression To Output Field
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
            if (lastToken === '(' || lastToken === ')') {
                bracketsCount[lastToken]--;
            }
            inputField.value = inputField.value.slice(0, -1);
        }
        // '()' Button : Adding Brackets While Validating Expression Syntax
        else if (element.innerHTML === '( )') {
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
        // Operator Buttons : Appending Operator While Validating Expression Syntax
        else if (operators.includes(element.innerHTML)) {
            // If There Is Already An Operator Just Before
            if (!(operators.includes(lastToken)) && lastToken !== '.') {
                inputField.value += element.innerHTML;
            }
        }
        // Digits And '.' Button : Adding Digits And Dot Operator (While Validating Expression Syntax)
        else {
            // If Input Is Decimal
            if (element.innerHTML === '.') {
                // Checking If There Is A Digit At The End Of The Input 
                if (digits.includes(lastToken)) {
                    // Checking For Invalid Syntaxes Like 5.3.2
                    let inputFieldValue = inputField.value;

                    let index = inputFieldValue.length - 1;
                    while (index >= 0 && digits.includes(inputFieldValue[index])) {
                        index--;
                    }

                    if (index === -1 || inputFieldValue[index] !== '.') {
                        inputField.value += '.';
                    }

                }
            }
            // If Input Is A Digit
            else {
                if (lastToken !== ')') {
                    inputField.value += element.innerHTML;
                }
            }
        }
    }
    ));