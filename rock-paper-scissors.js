let humanScore = 0
let computerScore = 0
let round = 0

function main(){

  const btns = document.querySelectorAll("button")

  btns.forEach((btn) => getScore(btn))

  console.log(selectWinner(humanScore, computerScore))
}

function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3)
      
  plays = ["rock", "paper", "scissors"]
  console.log(`Computer: ${plays[randomNum]}`)

  return plays[randomNum]
}


function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase()
  computerChoice = computerChoice.toLowerCase()
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock"))
    {
      computerScore += 1
      return "Computer wins !!!"
    }
  else if(
    (computerChoice === "rock" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "paper"))
    {
      return "No one wins"
    }
  else{
    humanScore += 1
    return "You win !!"
  }
}

function selectWinner(humanScore, computerScore){
  if (humanScore < computerScore){
    return `You lost :(`
  }
  else if (humanScore > computerScore){
    return `You won, congrats :)`
  }
  else{
    return "Game was tie"
  }

}

function getScore(btn){
  const roundWinnerPara = document.querySelector("#round-winner")
  const scorePara = document.querySelector("#score")

  btn.addEventListener("click", () =>{
      roundWinnerPara.textContent = playRound(btn.value, getComputerChoice())
      scorePara.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
    })

}

main()


