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