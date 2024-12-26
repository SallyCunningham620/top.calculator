let operator = "";
let num1 = "";
let num2 = "";

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num);
}
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}


function operate(operator, num1, num2) {
    switch(operator)
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

};