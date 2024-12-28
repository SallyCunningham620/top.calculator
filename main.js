const outputNum = document.getElementById("outputNum");
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
outputNum.textContent = ""

//let operator = "";
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
    let operator = "";
    let num1 = "";
    let num2 = "";
    display.value = "0"
}

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

numberButton.forEach((number) => {
    number.addEventListener("click", () => {
    previousNum += number.value
    outputNum.textContent = previousNum; 
    console.log(previousNum);

})
})

operatorButton.forEach((operator) => {
    operator.addEventListener('click', () => {
        console.log('${operator}')
       /* num1 = previousNum;
        clickedOperator = operator.textContent;
        event.target.textContent = previousNum + clickedOperator;
        previousNum = "";
        console.log(number1 + storedNumber);
console.log(clickedOperator);
calculate();*/
})
})