// JavaScript goes here


const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clear = document.querySelector("clear");


const displayArray = [];
let input;
let firstNumber;
let operator;
let secondNumber; 

digitButtons.forEach(button => button.addEventListener("click",()=> {
    input = Number(button.textContent);
    displayArray.push(input);
    populateDisplay(displayArray);
}))

function populateDisplay () {
    display.textContent =  displayArray.join("");
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

// console.log(add(4,2));
// console.log(subtract(4,2));
// console.log(multiply(4,2));
// console.log(divide(4,2));

function operate (operator,firstNumber,secondNumber) {
    if (operator == 'add') {
        return add(firstNumber,secondNumber);
    } else if (operator == 'subtract') {
        return subtract(firstNumber,secondNumber);
    } else if (operator == 'multiply') {
        return multiply(firstNumber,secondNumber);
    } else if (operator == 'divide') {
        return divide (firstNumber,secondNumber);
    } else {
        
    }
}

console.log(operate('add',5,3));
console.log(operate('subtract',5,3));
console.log(operate('multiply',5,3));
console.log(operate('divide',5,3));



