// JavaScript goes here

let firstNumber;
let operator;
let secondNumber; 

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



