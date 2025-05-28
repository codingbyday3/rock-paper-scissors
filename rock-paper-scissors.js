
function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3)
      
  plays = ["rock", "paper", "scissors"]

  return plays[randomNum]
}
// console.log(getComputerChoice())

function getHumanChoice(){
  userPlay = prompt("What is your move?")

  return userPlay
}
// console.log(getHumanChoice())

