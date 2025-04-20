// JavaScript goes here

// const display = document.querySelector('#display');
// const numberOne = document.querySelector('#numberOne');
// const numberTwo = document.querySelector('#numberTwo');
// const numberThree = document.querySelector('#numberThree');
// const numberFour = document.querySelector('#numberFour');
// const numberFive = document.querySelector('#numberFive');
// const numberSix = document.querySelector('#numberSix');
// const numberSeven = document.querySelector('#numberSeven');
// const numberEight = document.querySelector('#numberEight');
// const numberNine = document.querySelector('#numberNine');
// const operatorAdd = document.querySelector("add");
// const operatorSubtract = document.querySelector("subtract");
// const operatorMultiply = document.querySelector("multiply");
// const operatorDivide = document.querySelector("divide");
// const operatorEqual = document.querySelector("equal");
// const clear = document.querySelector("clear");

const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelector('.operator');
const clear = document.querySelector("clear");



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



