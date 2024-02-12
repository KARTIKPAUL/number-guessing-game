let randomNumber = parseInt((Math.random() * 100) + 1);

console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainin = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess); 
    });
}
function validateGuess(guess){
    if(isNaN(guess)) alert("Please Enter a Valid Number");
    else if(guess < 1) alert("Please Enter a number greater than 1");
    else if(guess > 100) alert('Please Enter a number less than 100')
    else{
    prevGuess.push(guess);
    if(numGuess > 9){
        displayGuess(guess);
        displayMessage(`Game Over.Random Number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkkGuess(guess);
    }
  }
}
function checkkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`Congratullation ! You Guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`You Guessed it number is Too Low`);
    }else if(guess > randomNumber){
        displayMessage(`You Guessed it number is Too High`);
    }
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remainin.innerHTML = `${10-numGuess}`
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerText =`<h2 id="newGame"> Start New Game</h2>`
    playGame = false;
    newGame();
}
function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click' , function(e){
    randomNumber = parseInt((Math.random() * 100) + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainin.innerHTML = `${10-numGuess}`
    userInput.removeAttribute('disabled');
    startOver(p);
    playGame = true;
   });  
}