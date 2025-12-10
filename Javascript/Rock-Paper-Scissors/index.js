// Function to generate random number
function generateRandomNum(){
    return Math.floor(Math.random() * 3) // generates random number between 0-2
}

// Function to generate computer option
function computerChoice(number){
    switch (number){
        case 0:
            return "✊"
        case 1:
            return "📃"
        case 2:
            return "✂️"
    }
}

// Function that evaluates the result
function evaluateWinner(user, computer){
    switch (user){
        // USER PICKS ROCK
        case "✊":
            if (computer == "✊"){
                document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                document.getElementById("userChoice").textContent = `user choice: ${user}`

                // Result
                document.getElementById("result-text").textContent = "IT'S A DRAW"
            }else if (computer == "📃"){
                document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                document.getElementById("userChoice").textContent = `user choice: ${user}`

                // Result
                document.getElementById("result-text").textContent = "COMPUTER WINS"
            }else {
                document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                document.getElementById("userChoice").textContent = `user choice: ${user}`

                // Result
                document.getElementById("result-text").textContent = "PLAYER WINS"
            }
            break;
            
            // USER PICKS PAPER
            case "📃":
                if (computer == "✊"){
                    document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
    
                    // Result
                    document.getElementById("result-text").textContent = "PLAYER WINS"
                }else if (computer == "📃"){
                    document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
    
                    // Result
                    document.getElementById("result-text").textContent = "IT'S A DRAW"
                }else {
                   document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
    
                    // Result
                    document.getElementById("result-text").textContent = "COMPUTER WINS"
                }
                break;
                
                // USER PICKS SCISSOR
                case "✂️":
                    if (computer == "✊"){
                        document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
        
                        // Result
                        document.getElementById("result-text").textContent = "COMPUTER WINS"
                    }else if (computer == "📃"){
                        document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
        
                        // Result
                        document.getElementById("result-text").textContent = "PLAYER WINS"
                    }else {
                        document.getElementById("computerChoice").textContent = `Computer: ${computer}`
                        document.getElementById("userChoice").textContent = `user choice: ${user}`
        
                        // Result
                        document.getElementById("result-text").textContent = "IT'S A DRAW"
                    }
                    break;
    }
}

// start

// Take user Choice
let userChoice = null;

document.getElementById("rockBtn").onclick = function(){
    userChoice = "✊"
    const computer = computerChoice(generateRandomNum())
    evaluateWinner(userChoice, computer)
}

document.getElementById("paperBtn").onclick = function(){
    userChoice = "📃"
    const computer = computerChoice(generateRandomNum())
    evaluateWinner(userChoice, computer)
}

document.getElementById("scissorBtn").onclick = function(){
    userChoice = "✂️"
    const computer = computerChoice(generateRandomNum())
    evaluateWinner(userChoice, computer)
}
