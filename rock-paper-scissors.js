humanScore = 0
computerScore = 0
round = 0

function main(){

  while(round < 5){
    
    console.log(playRound(getHumanChoice(), getComputerChoice()))
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
    round += 1

  }

  console.log(selectWinner(humanScore, computerScore))
}

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

function selectWinner(humanScore, computerScore){
  if (humanScore < computerScore){
    return `You lost :(`
  }
  else if (humanScore > computerScore){
    return `You won, congrats :)`
  }

}

main()


