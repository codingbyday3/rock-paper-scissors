humanScore = 0
computerScore = 0


function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3)
      
  plays = ["rock", "paper", "scissors"]
  console.log(`Computer: ${plays[randomNum]}`)

  return plays[randomNum]
}
// console.log(getComputerChoice())

function getHumanChoice(){
  userPlay = prompt("What is your move?")
  console.log(`User: ${userPlay}`)
  return userPlay
}
// console.log(getHumanChoice())

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

console.log(playRound(getHumanChoice(), getComputerChoice()))

