// Counter Program
let number = 0 // default value

document.getElementById("display-text").textContent = number

// Decreasing the number by 1
document.getElementById("minus-button").onclick = function(){
    number--
    document.getElementById("display-text").textContent = number
}

// Reseting the number
document.getElementById("reset-button").onclick = function(){
    number = 0
    document.getElementById("display-text").textContent = number
}

//Adding one to the number
document.getElementById("plus-button").onclick = function(){
    number++
    document.getElementById("display-text").textContent = number
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
    body.classList.add("light-theme");
    themeToggle.textContent = "☀️ Light Mode";
} else {
    themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.onclick = function() {
    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "dark");
    }
}
