# Exercise 3
Make a Calculator! using prompt(), and variables, make a program that does the following:
1. Prompts the user for first number.
2. Stores that first number
3. Prompts the user for the second number.
4. stores that number and responds with the SUM by using an alert.  


**BONUS:** Make a program that can subtract, multiply, and also divide!

## Solution
``` 
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
```