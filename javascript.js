console.log(`Welcome to Rock, Paper, Scissors! To start, please call the "playGame()" function!`)

function getComputerInput() {
    let array = [`Rock`, `Paper`, `Scissors`]
    let randInt = Math.floor(Math.random() * 3)
    return array[randInt]
}

function getHumanChoice() {
    let humanInput = prompt(`Rock, Paper, Scissors? `)
    return humanInput
}

const buttons = document.querySelectorAll("button")
const outputArea = document.querySelector("#output-area")

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        if (button.textContent === "Rock"){
            playRound("rock", getComputerInput())
        } else if (button.textContent === "Paper") {
            playRound("paper", getComputerInput())
        }else if (button.textContent === "Scissors") {
            playRound("scissors", getComputerInput())
        }
    })

})
let humanScore = 0
let computerScore = 0
let hScore = document.querySelector(".human-score")
let cScore = document.querySelector(".computer-score")

function resetGame() {
    humanScore = 0
    computerScore = 0

    hScore.textContent = `Your Score: 0`
    cScore.textContent = `Computer Score: 0`

    outputArea.innerHTML = ""
    console.log("Game Reset!")
}

function playRound(humanChoice, computerChoice) {
    
        if ((computerChoice == `Rock`) && (humanChoice == `scissors`)) {
            ++computerScore
            cScore.textContent = `Computer Score: ${computerScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you lose! Rock beats Scissors!`
            outputArea.appendChild(text)
        }else if ((computerChoice == `Rock`) && (humanChoice == `paper`)) {
            ++humanScore
            hScore.textContent = `Your Score: ${humanScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you win! Paper beats Rock!`
            outputArea.appendChild(text)


        }else if ((computerChoice == `Paper`) && (humanChoice == `rock`)) {
            ++computerScore
            cScore.textContent = `Computer Score: ${computerScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you lose! Paper beats rock!`
            outputArea.appendChild(text)
        }else if ((computerChoice == `Paper`) && (humanChoice == `scissors`)) {
            ++humanScore
            hScore.textContent = `Your Score: ${humanScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you win! Scissors beat Paper`
            outputArea.appendChild(text)


        }else if ((computerChoice == `Scissors`) && (humanChoice == `paper`)) {
            ++computerScore
            cScore.textContent = `Computer Score: ${computerScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you lose! Scissors beat Paper`
            outputArea.appendChild(text)
        }else if ((computerChoice == `Scissors`) && (humanChoice == `rock`)) {
            ++humanScore
            hScore.textContent = `Your Score: ${humanScore}`
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, you win! Rock beats Scissors!`
            outputArea.appendChild(text)


        }else {
            let text = document.createElement('p')
            text.textContent = `Computer chose ${computerChoice}, its a tie!`
            outputArea.appendChild(text)
        }
        
        if (humanScore == 5) {
            alert("You reached 5 points! You win!")
            resetGame()
        } else if (computerScore == 5) {
            alert("The computer reached 5 points, you lose.")
            resetGame()
        }
        
    }
            
    playRound(x, y)
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Your Score: ${humanScore}`)
    
    if (computerScore > humanScore) {
        console.log(`You lose, the computer's score was ${computerScore} and your score was ${humanScore}`)
    } else {
        console.log(`You win! Your score was ${humanScore} and the computer's score was ${computerScore}`)
    }


  