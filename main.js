let outputNum = document.getElementById("outputNum");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
let decimalButton = document.querySelector("#decimal");
//const allButtons = document.getElementById("calculatorContainer");

outputNum.textContent = "0";

let a = "";
let b = "";
let operator = "";
let clickedOperator = false;
let isEqual = false;

//window.addEventListener('keydown', handleKeyboardInput);
decimalButton.addEventListener("click", () => {
    oneDecimal(decimalButton.textContent);
})

/*function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) addNumber(e.key);
    if (e.key === '.') oneDecimal('.');
    if (e.key === '=' || e.key === 'Enter') equal();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      addOperator(convertOperator(e.key));
    outputNum.textContent= e.key;
}
  
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '/'
    if (keyboardOperator === '*') return '*'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }  */

//click an operator

function addOperator(operatorButton) {
    console.log(outputNum.textContent);
    console.log(operatorButton);
    console.log(clickedOperator);
    //console.log(operator);

    if (operator !== "" && !clickedOperator) {
        b = outputNum.textContent;
        calculate();
        console.log(a);
        console.log(b);

    }
    a = outputNum.textContent;
    operator = operatorButton;
    clickedOperator = true;
    console.log(a);
    console.log(clickedOperator);
    console.log(operator);
}

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

//click a number
function addNumber(number) {
    console.log(number);
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
/*    if (number == ".") {
        return oneDecimal(number);
    }*/
    outputNum.textContent += number;
    //clickedOperator = true;
    console.log(number);
    console.log(isEqual);
    console.log(clickedOperator);
}

//1 decimal per entry
function oneDecimal(decimal) {
    console.log(decimal);
    if(outputNum.textContent === "") {
        outputNum.textContent = '0';
        outputNum.textContent += decimal;
    } else if(!outputNum.textContent.includes(decimal)) {
        outputNum.textContent += decimal;
    } 
}

//function for calculating and returning result to output
function calculate() {
    if (b === "0") {
        return outputNum.textContent = ":/"
    } else{
    console.log(a);
    console.log(b);
    const result = Math.round((operate(Number(a), operator, Number(b))) * 1000) / 1000;
    outputNum.textContent = result;
    console.log(result);}
}

/*function equal() {
    if (operator !== "" && !clickedOperator){
        b = outputNum.textContent;
        console.log(b);
        outputNum.textContent = calculate();
        // Reset
        isEqual = true;
        a = 0;
        b = 0;
        operator = "";
    }
}
equalButton.addEventListener('click', equal);
*/
equalButton.addEventListener('click', () =>{
    console.log(isEqual);
    console.log(operator);
    console.log(clickedOperator);
    if (operator !== "" && !clickedOperator){
        b = outputNum.textContent;
        calculate();
        // Reset
        isEqual = true;
        a = 0;
        b = 0;
        operator = "";
    }}
)

//remove last entered
function backspace() {
    console.log(a);
   /* if (!clickedOperator) {
        a = outputNum.textContent;
    }*/
    outputNum.textContent = outputNum.textContent
    .toString()
    .slice(0, -1);
    console.log(a)
    console.log(outputNum.textContent);
}
backspaceButton.addEventListener('click', backspace);

//clear back to 0
function clear() {
    a = "";
    b = "";
    operator = "";
    isEqual = false;
    clickedOperator = false;
    outputNum.textContent = "0";
    decimalButton.disabled = false;
}

clearButton.addEventListener("click", clear)

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
    }
};