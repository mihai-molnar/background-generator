var _ = require ("lodash");
console.log(_);

//Define the variables
var css = document.querySelector("h3"); //h3
var color1 = document.querySelector(".color1"); //input color 1
var color2 = document.querySelector(".color2"); //input color 2
var body = document.getElementById('gradient');
var h3 = document.getElementById("h3title")

function changeColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	h3.innerHTML = "First color: " + color1.value + " Second color: " + color2.value;
}


color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)

console.log(h3);