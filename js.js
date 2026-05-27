
let humanScore = 0;
let computerScore = 0;


function getComputerChoise() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return randomChoice; 
};


function getHumanChoice() {
  let user = prompt();
  return user;
};

console.log(getComputerChoise());
console.log(getHumanChoice());