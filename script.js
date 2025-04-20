// JavaScript goes here


const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector(".equal"); 
const clearButton = document.querySelector("clear");



let displayString = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
result = null; 

digitButtons.forEach(button => button.addEventListener("click",()=> {
    inputNumber(button.textContent);
    populateDisplay(displayString);
}))

operatorButtons.forEach(button => button.addEventListener("click",()=> {
    if (button.textContent === '+') {
        operator = "+";
    } else if (button.textContent === '-') {
        operator = "-";
    } else if (button.textContent === 'x') {
        operator = "x";
    } else if (button.textContent === '/') {
        operator = "/";
    } else {

    }
    displayArray [1] = operator;
    displayString = displayArray.join("");
    populateDisplay(displayString);

}))

equalButton.addEventListener("click",() => {
    firstNumber = displayArray [0];
    operator = displayArray[1];
    secondNumber = displayArray[2];
    displayString = operate(operator,firstNumber,secondNumber);
    displayArray = [];
    displayArray [0] = displayString;
    populateDisplay(displayString);

})

function inputNumber(number) {
    if (firstNumber === 0) {
        if (displayString === '0' || displayValue === 0) {
            // 1st click - handles first operand input
            displayString = number;
        } else if(displayString === firstNumber) {
            //starts new operation after inputEquals()
            displayString = number;
        } else {
            displayString+= number;
        }
    } else {
        //3rd click - inputs to secondNumber
        if(displayString === firstNumber) {
            displayString = number;
        } else {
            displayString += number;
        }
    }
}

function inputOperator(operator){
    // 2nd click - handles first operator input
    operator = 
}

function populateDisplay () {
    display.textContent =  displayString;
    return display.textContent
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}


function operate (operator,firstNumber,secondNumber) {
    if (operator == '+') {
        return add(firstNumber,secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber,secondNumber);
    } else if (operator == 'x') {
        return multiply(firstNumber,secondNumber);
    } else if (operator == '/') {
        return divide (firstNumber,secondNumber);
    } else {
        
    }
}




