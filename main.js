let outputNum = document.getElementById("outputNum");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
let decimalButton = document.querySelector(".decimal");

outputNum.textContent = "0";

let a = "";
let b = "";
let operator = "";
let clickedOperator = false;
let isEqual = false;

window.addEventListener('keydown', handleKeyboardInput);
decimalButton.addEventListener("click", () => {
    oneDecimal(decimalButton.textContent);
})

equalButton.addEventListener('click', equal);
backspaceButton.addEventListener('click', backspace);
clearButton.addEventListener("click", clear)

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        addOperator(button.textContent);
        console.log();
})
})

numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        addNumber(button.textContent);
        console.log(outputNum.textContent)
    })
})

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) addNumber(e.key);
    if (e.key === '.') oneDecimal('.');
    if (e.key === '=' || e.key == 'Enter') equal();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      addOperator(convertOperator(e.key));
    else {return "Incorrect key entered."};
}
  
function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '/'
    if (keyboardOperator === '*') return '*'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
  }

//click an operator
function addOperator(operatorButton) {
    if (operator !== "" && !clickedOperator) {
        b = outputNum.textContent;
        calculate();
    }
    a = outputNum.textContent;
    operator = operatorButton;
    clickedOperator = true;
}

//click a number
function addNumber(number) {
    if (outputNum.textContent == "0") {
        outputNum.textContent = ""
    }
    if (isEqual) {
        outputNum.textContent = "";
        isEqual = false;
    }
    if (clickedOperator) {
        outputNum.textContent = "";
        clickedOperator = false;
    }
    outputNum.textContent += number;
}

//1 decimal per entry
function oneDecimal(decimal) {
    if (clickedOperator) {
        outputNum.textContent = "";
        clickedOperator = false;
    }
    if(outputNum.textContent === "") {
        outputNum.textContent = '0' + decimal;
    } else if(!outputNum.textContent.includes(decimal)) {
        outputNum.textContent += decimal;
    } 
}

//function for calculating and returning result to output
function calculate() {
    if (b === "0" && operator ==="/") {
        return outputNum.textContent = ":/"
    } else{
    const result = Math.round((operate(a, operator, b)) * 1000) / 1000;
    outputNum.textContent = result;
}}

function equal() {
    if (operator !== "" && !clickedOperator){
        b = outputNum.textContent;
        calculate();
        // Reset
        isEqual = true;
        a = 0;
        b = 0;
        operator = "";
    } else {
        return outputNum = "0";
    }}

//remove last entered
function backspace() {
    outputNum.textContent = outputNum.textContent
    .toString()
    .slice(0, -1);
}

//clear back to 0
function clear() {
    a = "";
    b = "";
    operator = "";
    isEqual = false;
    clickedOperator = false;
    outputNum.textContent = "0";
    //decimalButton.disabled = false;
}

//functions for math
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}

//function for operator used
function operate(num1, operator, num2) {
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+':
        return add(num1, num2);
        break;

        case '-':
        return subtract(num1, num2);
        break;

        case '*':
        return multiply(num1, num2);
        break;

        case '/':
        return divide(num1, num2);
        default:
        return null;
    }
};