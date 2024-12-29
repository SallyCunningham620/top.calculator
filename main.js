let num1 = document.querySelector(".num1Text");
let operator = document.querySelector(".operatorText")
let num2 = document.querySelector(".num2Text");
let outputNum = document.getElementById("outputNum");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

num1.textContent = "";
operator.textContent = "";
num2.textContent = "";
outputNum.textContent = "0";

let previousNum = ""
let clickedOperator = "";

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

function clear() {
    operator = "";
    num1Text = "";
    num2Text = "";
    operator = "";
    previousNum = ""
    clickedOperator = "";
    outputNum.value = "0"
}

clearButton.addEventListener('click', clear);

function operate(operator, num1, num2) {
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
        if (num2 === 0) return "err";
        return divide(num1, num2);
    }
};

function calculate() {
    const result = operate(clickedOperator, num1, previousNum);
    outputNum.textContent = result;
}

numberButton.forEach((number) => {
    number.addEventListener("click", () => {
    previousNum += number.value
    num1.textContent = previousNum; 
    console.log(previousNum);

})
})

operatorButton.forEach((operator) => {
    operator.addEventListener('click', () => {
        num1 = previousNum;
        clickedOperator = operator.value;
        operator.textContent = clickedOperator;
        outputNum.textContent = num1 + clickedOperator;
        console.log(num1);
        console.log(clickedOperator);
        calculate ();
})
})

equalButton.addEventListener('click', calculate);