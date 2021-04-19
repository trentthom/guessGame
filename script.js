'use strict';
// document.querySelector('.message').textContent = 'suck eggs'
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)
//
// document.querySelector('.check').addEventListener('click', function(){
//   document.querySelector('.message').textContent = 'woohoo i did it'
// })


let secretNumber = Math.trunc(Math.random()*20 + 1)
let guess = ''
let score = document.querySelector('.score').textContent
let highScore = 0

document.querySelector('.check').addEventListener('click', function(){
  guess = Number(document.querySelector('.guess').value)
  if(score === 0){
    document.querySelector('.score').textContent = 'Game Over'
  }
  if (!guess) {
    document.querySelector('.message').textContent = 'enter a number :)'
  } else if (guess > secretNumber){
    document.querySelector('.message').textContent = 'too high'
    if(score > 0){
      score--
      document.querySelector('.score').textContent = score
    }
    //guess too low
  } else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'too low'
    if(score > 0){
      score--
      document.querySelector('.score').textContent = score
    }
    //when player wins
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent = "that's a win"
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
  secretNumber = Math.trunc(Math.random()*20 + 1)
})
