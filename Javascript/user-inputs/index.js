// USER INPUTS
// 1. Prompting the user for input (Window.prompt())

let username;
// username = window.prompt("Enter your username: ");
console.log(`Hello ${username}`);

// Using textbox (HTML input element)

// access the document of ur button [ document.getElementById() | onclick event ]
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myTextbox").value; // get the value of the textbox
    console.log(`Hello ${username}`);

    // change the value of the H1 element
    document.getElementById("myH1").textContent = `Someone changed the title to:  ${username}`;
}
