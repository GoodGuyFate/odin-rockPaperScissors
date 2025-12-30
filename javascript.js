console.log(`Welcome to Rock, Paper, Scissors! To start, please call the "playGame()" function!`)

function getComputerInput() {
    let array = [`Rock`, `Paper`, `Scissors`]
    let randInt = Math.floor(Math.random() * 3)
    return array[randInt]
}

// console.log(getComputerInput())

function getHumanChoice() {
    let humanInput = prompt(`Rock, Paper, Scissors? `)
    return humanInput
}

// console.log(getHumanChoice())


function playGame() {
    let humanScore = 0
    let computerScore = 0
    let round = 0
    while (round <= 4) {
        let x = getHumanChoice().toLowerCase()
        let y = getComputerInput()

        function playRound(humanChoice, computerChoice) {
            if ((computerChoice == `Rock`) && (humanChoice == `scissors`)) {
                ++computerScore
                return console.log(`Computer chose ${computerChoice}, you lose! Rock beats Scissors!`)
            }else if ((computerChoice == `Rock`) && (humanChoice == `paper`)) {
                ++humanScore
                return console.log(`Computer chose ${computerChoice}, you win! Paper beats Rock!`)
            }else if ((computerChoice == `Paper`) && (humanChoice == `rock`)) {
                ++computerScore
                return console.log(`Computer chose ${computerChoice}, you lose! Paper beats rock!`)
            }else if ((computerChoice == `Paper`) && (humanChoice == `scissors`)) {
                ++humanScore
                return console.log(`Computer chose ${computerChoice}, you win! Scissors beat Paper`)
            }else if ((computerChoice == `Scissors`) && (humanChoice == `paper`)) {
                ++computerScore
                return console.log(`Computer chose ${computerChoice}, you lose! Scissors beat Paper`)
            }else if ((computerChoice == `Scissors`) && (humanChoice == `rock`)) {
                ++humanScore
                return console.log(`Computer chose ${computerChoice}, you win! Rock beats Scissors!`)
            }else {
                return console.log(`Computer chose ${computerChoice}, Its a tie!`)
            }
        }
        ++round
        playRound(x, y)
        console.log(`Computer Score: ${computerScore}`)
        console.log(`Your Score: ${humanScore}`)
    }
    if (computerScore > humanScore) {
        console.log(`You lose, the computer's score was ${computerScore} and your score was ${humanScore}`)
    } else {
        console.log(`You win! Your score was ${humanScore} and the computer's score was ${computerScore}`)
    }
}



// console.log(x)
// console.log(y)

// playRound(x, y)

// console.log(`Computer Score: ${computerScore}`)
// console.log(`Your Score: ${humanScore}`)