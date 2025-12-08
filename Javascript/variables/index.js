// Creating a variable and assigning a value
let my_string = "Hello, World!";

// declaring a variable
let x;
let y;

x = 10
y = 13.90

console.log(x);
console.log(y);

// checking the type of variable
console.log(typeof x); // number
console.log(typeof y); // number
console.log(typeof my_string); // string

// Performing arithmetic operations
let sum = x + y;
console.log("The sum of x and y is: " + sum);


// SOme test
let name = "Jan Randolph Emmanuel L. Santos";   //string
let age = 19;                                   //number
let isStudent = true;                           //boolean
let interests = ["coding", "music", "gaming"];  //array
let crush = "Celestia"                          //string

// Printing a message using template literals
console.log(`Hello! My name is ${name} and I am ${age} years old`)
console.log(`My interests include: ${interests.join(", ")}`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My crush is ${crush}`);

// creating a new line
console.log("This is line 1.\nThis is line 2.");

// Re-assigning variable values
x = 20;
y = 30.5;
console.log("After re-assignment:");
console.log("x: " + x);
console.log("y: " + y);


// Changing the text content of HTML elements using DOM manipulation
document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = isStudent;
document.getElementById("p4").textContent = interests;
document.getElementById("p5").textContent = crush;