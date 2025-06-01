let humanScore = 0
let computerScore = 0
let round = 0

function main(){

  const btns = document.querySelectorAll("button")

  btns.forEach((btn) => getScore(btn))

}

function getComputerChoice(){

  const computerChoicePara = document.querySelector("#computer-choice")
  randomNum = Math.floor(Math.random() * 3)
      
  plays = ["rock", "paper", "scissors"]
  computerChoicePara.textContent = `Computer: ${plays[randomNum]}`
  

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

function selectWinner(){

  let finalResult
  
  if (humanScore < computerScore){
    
    finalResult = `You lost :(, click any button to restart`
  }
  else if (humanScore > computerScore){
    finalResult = `You won, congrats :), click any button to restart`
  }
  else{
    finalResult = "Game was tie, click any button to restart"
  }

  humanScore = 0
  computerScore = 0
  round = 0

  return finalResult

}

function getScore(btn){
  const roundWinnerPara = document.querySelector("#round-winner")
  const scorePara = document.querySelector("#score")
  const main = document.querySelector("main")
  const winnerIsPara = document.createElement("p")
  winnerIsPara.className = "winner-is"


  btn.addEventListener("click", () =>{
  
      roundWinnerPara.textContent = playRound(btn.value, getComputerChoice())
      scorePara.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`

      //naredi v if stavek da naredi nov p in notr napise rezultat
      if(humanScore === 5 || computerScore === 5){
        winnerIsPara.textContent = selectWinner()

        main.insertBefore(winnerIsPara, main.firstChild)
      }else{
        winnerIsPara.remove()
      }
    })

}

main()


