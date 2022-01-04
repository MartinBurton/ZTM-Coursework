var age = prompt("Welcome to the keyless car. To start please provide your age");
if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Sorry, you are too young to drive this car. Powering off");
}
