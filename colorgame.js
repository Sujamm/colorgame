var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var barMessage = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grb color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            barMessage.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            barMessage.textContent = "Try Again"
        }
    });
};

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        //change each color to match the correct color
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    //make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        //getRandom color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};

function randomColor() {
    //pick a "red" 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " +
        b + ")";
};