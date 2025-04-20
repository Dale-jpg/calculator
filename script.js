// JavaScript goes here


const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector(".equal"); 
const clearButton = document.querySelector("clear");


let displayString ;
let input;
let firstNumber;
let operator;
let secondNumber; 

digitButtons.forEach(button => button.addEventListener("click",()=> {
    input = Number(button.textContent);
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




