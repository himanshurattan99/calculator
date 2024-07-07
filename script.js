// Getting All The HTML Elements
const themeButton = document.getElementById('theme-button');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const allClearButton = document.getElementById('all-clear-button');
const bracketsButton = document.getElementById('brackets-button');
const operatorButtons = document.getElementsByClassName('operator-button');
const digitButtons = document.getElementsByClassName('digit-button');
const decimalButton = document.getElementById('decimal-button');
const backspaceButton = document.getElementById('backspace-button');
const equalToButton = document.getElementById('equal-to-button');

const operators = ['+', '-', '*', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// To Count Brackets In Expression
const bracketsCount = {
    '(': 0,
    ')': 0,
}

// Storing The Last Entered Token In Input Field
let lastToken = inputField.value.slice(-1);

// Adding Click Event Listeners To All The Buttons

// Light And Dark Mode Button : Toggles Between Light And Dark Mode
themeButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        themeButton.innerHTML = 'Dark Mode';
    }
    else {
        document.body.classList.add('light-theme');
        themeButton.innerHTML = 'Light Mode';
    }
});

themeButton.addEventListener('mouseover', () => {
    if (document.body.classList.contains('light-theme')) {
        themeButton.style.backgroundColor = '#323232';
        themeButton.innerHTML = 'Dark Mode';
    }
    else {
        themeButton.style.backgroundColor = '#FFF9F9';
        themeButton.innerHTML = 'Light Mode';
    }
});

themeButton.addEventListener('mouseout', () => {
    if (document.body.classList.contains('light-theme')) {
        themeButton.style.backgroundColor = '#FFF9F9';
        themeButton.innerHTML = 'Light Mode';
    }
    else {
        themeButton.style.backgroundColor = '#323232';
        themeButton.innerHTML = 'Dark Mode';
    }
});

// 'AC' Button : Clearing Expression
allClearButton.addEventListener('click', () => {
    inputField.value = '';
    outputField.innerHTML = '';
    bracketsCount['('] = 0;
    bracketsCount[')'] = 0;
});

// '()' Button : Adding Brackets While Validating Expression Syntax
bracketsButton.addEventListener('click', () => {
    lastToken = inputField.value.slice(-1);

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
});

// Operator Buttons : Evaluating Input Field Expression Or Appending Operator While Validating Expression Syntax
Array.from(operatorButtons).forEach((element) => {
    element.addEventListener('click', () => {
        // If '=' Operator Button Is Clicked
        if (element.innerHTML === '=') {
            // Evaluating Input Field Expression To Output Field
            try {
                outputField.innerHTML = '= ' + eval(inputField.value);
            }
            catch {
                outputField.innerHTML = 'Invalid Expression';
            }
        }
        // If Other Operator Buttons Are Clicked
        else {
            lastToken = inputField.value.slice(-1);

            // If There Is Already An Operator Just Before
            if (!(operators.includes(lastToken)) && lastToken !== '.') {
                inputField.value += element.innerHTML;
            }
        }
    });
});

// Digits : Adding Digits While Validating Expression Syntax
Array.from(digitButtons).forEach((element) => {
    element.addEventListener('click', () => {
        lastToken = inputField.value.slice(-1);

        if (lastToken !== ')') {
            inputField.value += element.innerHTML;
        }
    });
});

// Decimal Button : Adding Decimal While Validating Expression Syntax
decimalButton.addEventListener('click', () => {
    lastToken = inputField.value.slice(-1);

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
});

// '←' Button : Back Button
backspaceButton.addEventListener('click', () => {
    lastToken = inputField.value.slice(-1);

    if (lastToken === '(' || lastToken === ')') {
        bracketsCount[lastToken]--;
    }
    inputField.value = inputField.value.slice(0, -1);
});