console.log("Hello World!")

function getComputerInput() {
    array = ["Rock", "Paper", "Scissors"]
    randInt = Math.floor(Math.random() * 3)
    return array[randInt]
}

// console.log(getComputerInput())

function getHumanChoice() {
    let humanInput = prompt("Rock, Paper, Scissors? ")
    return humanInput
}

// console.log(getHumanChoice())

humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    
}