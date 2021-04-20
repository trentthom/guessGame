'use strict'

//secret number generator
const numberGenerator = function(){
  return Math.trunc(Math.random()*20 + 1)
}

let secretNumber = numberGenerator()
let guess = ''
let score = document.querySelector('.score').textContent
let highScore = 0

//display message helper function
const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){

  //assign input number to guess variable
  guess = Number(document.querySelector('.guess').value)

  if(score === 0){
    document.querySelector('.score').textContent = 'Game Over'
  }
  //guess not a vaild guess
  if (!guess) {
    displayMessage('enter a number :)')

    //guess is not the secret number
  } else if(guess !== secretNumber){
    displayMessage(guess > secretNumber ? 'too high' : 'too low')
    if(score >= 1){
      score--
      document.querySelector('.score').textContent = score
    }
    //winning condition
  } else if(guess === secretNumber){
    displayMessage("that's a win")
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '30rem'
    if(score > highScore){
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  }
})

//reset all conditions
document.querySelector('.again').addEventListener('click', function(){
  score = 20
  document.querySelector('.message').textContent = "Start guessing..."
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.guess').value = ''
  document.querySelector('.score').textContent = score
  secretNumber = numberGenerator()
})
