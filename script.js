'use strict';
// document.querySelector('.message').textContent = 'suck eggs'
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)
//
// document.querySelector('.check').addEventListener('click', function(){
//   document.querySelector('.message').textContent = 'woohoo i did it'
// })


const secretNumber = Math.trunc(Math.random()*20 + 1)
document.querySelector('.number').textContent = secretNumber
let guess = ''
let score = document.querySelector('.score').textContent
let highScore = document.querySelector('.highscore').textContent


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
  } else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'too low'
    if(score > 0){
      score--
      document.querySelector('.score').textContent = score
    }
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent = "that's a win"
    if(score > highScore){
      document.querySelector('.highscore').textContent = score
    }
  }
})
