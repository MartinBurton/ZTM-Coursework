var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var angleSlider = document.getElementById("angle");
var angleLabel = document.getElementById("angleLabel");
var randomBtn = document.querySelector(".random");


function getRandomColor() {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function setBackground() {
    body.style.background = "linear-gradient(" + angleSlider.value + "deg, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    angleLabel.textContent = "Angle (" + angleSlider.value + "deg):";
}

function setRandomBackground(){
    angleSlider.value = getRandomInt(360);
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setBackground();
}

setBackground();

color1.addEventListener("input", setBackground)

color2.addEventListener("input", setBackground)

angleSlider.addEventListener("input", setBackground)

randomBtn.addEventListener("click", setRandomBackground)


