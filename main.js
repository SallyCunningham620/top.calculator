let outputNum = document.getElementById("outputNum");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

outputNum.textContent = "0";

let a = "";
let b = "";
let operator = "";
let clickedOperator = false;
let isEqual = false;

//click an operator
function addOperator(operatorButton) {
    console.log(outputNum.textContent);
    console.log(clickedOperator);
    console.log(operator);

    if (operator !== "" && !clickedOperator) {
        b = outputNum.textContent;
        calculate();
        console.log(a);
        console.log(b);

    }
    a = outputNum.textContent;
    operator = operatorButton.value;
    clickedOperator = true;
    console.log(a);
    console.log(clickedOperator);
}

operatorButton.forEach((operator) => {
    operator.addEventListener('click', () => {
    addOperator(operator)
        console.log(operator);
})
})

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
    outputNum.textContent += number.value;
}
numberButton.forEach((number) => {
    number.addEventListener("click", () => {
        addNumber(number);
        console.log(outputNum.textContent)
    })
})

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
equalButton.addEventListener('click', () =>{
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
//clear back to 0
function clear() {
    a = "";
    b = "";
    operator = "";
    isEqual = false;
    clickedOperator = false;
    outputNum.value = "0";
}
clearButton.addEventListener('click', clear);

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