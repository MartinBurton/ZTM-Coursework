var firstNumber = prompt("Please enter the first number");
var operator = prompt("Which operation would you like to perform? (+, -, /, *)");
var secondNumber = prompt("Please enter the second number");
switch (operator) {
    case "+":
        var result = Number(firstNumber) + Number(secondNumber);
        alert(firstNumber + " + " + secondNumber  + " = " + result);
        break;

    case "-":
        var result = Number(firstNumber) - Number(secondNumber);
        alert(firstNumber + " - " + secondNumber  + " = " + result);
        break;

    case "/":
        var result = Number(firstNumber) / Number(secondNumber);
        alert(firstNumber + " / " + secondNumber  + " = " + result);
        break;

    case "*":
        var result = Number(firstNumber) * Number(secondNumber);
        alert(firstNumber + " * " + secondNumber  + " = " + result);
        break;

    default:
        alert("I am sorry there was an error.  Please try again.");
        break;
}

