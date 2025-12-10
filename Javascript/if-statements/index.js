// if statements
/*

if (condition) {
    action
}

*/
let age = 0;
if (age <= 0){
    console.log("You don't exist yet!");
}else if (age < 18){
    console.log("You're too young!");
}else{
    console.log("You're in!");
}

// Subscribe script

// Declare the necessary variables
const subresult = document.getElementById("result-text-subscribe")
const paymentresult = document.getElementById("result-text-payment")
const subscribeBtn = document.getElementById("subscribeBtn")
const visaBtn = document.getElementById("visaBtn")
const paypalBtn = document.getElementById("paypalBtn")
const paymeBtn = document.getElementById("paymeBtn")
const submitBtn = document.getElementById("submitBtn")

submitBtn.onclick = function() {

    if (subscribeBtn.checked){
        subresult.textContent = `You are subscribed!`
    }else{
        subresult.textContent = `You are not subscribed!`
    }

    // Payment
    if (visaBtn.checked){
        paymentresult.textContent = "You are paying with Visa"
        paymentresult.classList.remove("error")
    }else if (paypalBtn.checked){
        paymentresult.textContent = "You are paying with paypal"
        paymentresult.classList.remove("error")
    }else if (paymeBtn.checked){
        paymentresult.textContent = "You are paying with payMe"
        paymentresult.classList.remove("error")
    }else{
        paymentresult.textContent = "You must select a payment type!"
        paymentresult.classList.add("error")
    }
}