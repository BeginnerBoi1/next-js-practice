// Const variables
// 1. Const variables are immutable, meaning they cannot be changed after they are declared.

// Sample code (calculating the circumference of a circle)
const PI = 3.14159;
let radius; // variable to store the radius of the circle
let circumference; // variable to store the circumference of the circle

document.getElementById("calculate").onclick = function(){
    radius = document.getElementById("radius").value;
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `The circumference of the circle is ${circumference.toFixed(2)}`;
}

// toFixed(2) is used to round the number to 2 decimal places