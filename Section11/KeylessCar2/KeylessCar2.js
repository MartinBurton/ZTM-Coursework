function checkDriverAge() {
    console.log("Executing checkDriverAge Function");
    var driverAge = prompt("What is your age?");
    if (Number(driverAge) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(driverAge) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(driverAge) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

var checkDriverAge2 = function() {
    console.log("Executing checkDriverAge2 Function");
    var driverAge = prompt("What is your age?");
    if (Number(driverAge) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(driverAge) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(driverAge) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

var checkDriverAgeBonus = function(driverAge) {
    console.log("Executing checkDriverAgeBonus Function");
    if (Number(driverAge) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(driverAge) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(driverAge) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

checkDriverAge2();

checkDriverAgeBonus(92);

