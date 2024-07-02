let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")

const resultGes = document.querySelector("#result-Gestures")
const resultTxt = document.querySelector("#result-text")

const winCount = document.querySelector(".win-count")
const lossCount = document.querySelector(".loss-count")
const showTie = document.querySelector(".tie-count")

const autoPlayBtn = document.querySelector('.auto-play')

let playerScore = 0
let comScore = 0
let tieCount = 0
const gestures = document.querySelectorAll(".gestures")

gestures.forEach(gesture => {
    gesture.addEventListener('click', () => {
        playGame(gesture.alt)
    })
})

let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissor"]
    return choices[Math.floor(Math.random() * choices.length)]
}
let playGame = (playerChoice) => {
    const computerChoice = getComputerChoice()
    if (playerChoice === "rock" && computerChoice === "scissor" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissor" && computerChoice === "paper") {
        resultTxt.innerHTML = 'You <span style="color:green";>Won.</span>'
        resultGes.innerHTML = `You <img src="./Images/${playerChoice}-emoji.png" 
        class="img-mini"> 
        <img src="./Images/${computerChoice}-emoji.png" class="img-mini">  computer`
        playerScore++;
        winCount.innerHTML = playerScore
    } else if (playerChoice === "scissor" && computerChoice === "rock" ||
        playerChoice === "paper" && computerChoice === "scissor" ||
        playerChoice === "rock" && computerChoice === "paper") {
        resultTxt.innerHTML = 'You <span style="color:red";>lose.</span>'
        resultGes.innerHTML = `You <img src="./Images/${playerChoice}-emoji.png" 
        class="img-mini"> 
        <img src="./Images/${computerChoice}-emoji.png" class="img-mini"> Computer`
        comScore++
        lossCount.innerHTML = comScore
    } else {
        resultTxt.innerHTML = '<span style="color: skyblue">Tied.</span>'
        resultGes.innerHTML = `You <img src="./Images/${playerChoice}-emoji.png" 
        class="img-mini"> 
        <img src="./Images/${computerChoice}-emoji.png" 
        class="img-mini"> Computer`
        tieCount++
        showTie.innerHTML = tieCount;
    }
}

document.querySelector(".reset").addEventListener('click', () => {
    playerScore = 0
    winCount.innerHTML = 0
    comScore = 0
    lossCount.innerHTML = 0
    tieCount = 0 
    showTie.innerHTML = 0
})

//Auto play and stop
let interval;
function autoPlay() {
    interval = setInterval(() => {
        const playerMove = getComputerChoice()
        playGame(playerMove)
    }, 1000)
}
let check = true

autoPlayBtn.addEventListener('click', () => {
    if (check) {
        autoPlay()
        autoPlayBtn.innerHTML = "Stop AutoPlay"
        autoPlayBtn.style.background = "Red"
        check = false
    }
    else{
        clearInterval(interval)
        autoPlayBtn.innerHTML = "AutoPlay"
        autoPlayBtn.style.background = "green"
        check = true
    }
})