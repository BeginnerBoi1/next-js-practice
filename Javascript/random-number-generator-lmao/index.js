// Random number generator
let randomNumber = Math.floor(Math.random() * 6); // This generates a random number
const randomButton = document.getElementById("random-button");

randomButton.onclick = function(){
    document.getElementById("randomNumber").textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * 11);
}