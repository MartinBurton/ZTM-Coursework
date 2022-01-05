var firstNumber = prompt("Please enter the first number"); 
var operator = prompt("Which operation would you like to perform? (+, -, /, *)");
var secondNumber = prompt("Please enter the second number");
var result;
switch (operator) {
    case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;

    case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;

    case "/":
        result = Number(firstNumber) / Number(secondNumber);
        break;

    case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;

    default:
        alert("I am sorry there was an error.  Please try again.");
        break;
} 
if (result != undefined) {
    alert(firstNumber + " " + operator + " " + secondNumber  + " = " + result);
}
