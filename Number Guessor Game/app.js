// Game values

let min =1,
    max=10,
    winningNum=getRandomNumber(min,max),
    guessesLeft=3;


// UI Elements 

const game= document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message = document.querySelector('.message');



// Assign UI min and max 

minNum.textContent=min;
maxNum.textContent=max;

// Play again Event listener

game.addEventListener('mousedown',function(e){

  if(e.target.className==='play-again')

  window.location.reload();



})

// Listen for Guess

guessBtn.addEventListener('click',function(){

let guess =parseInt(guessInput.value);

// console.log(guess);



// Validate 

if(isNaN(guess)||guess<min || guess>max){

  setMessage(`Please enter the number between ${min} and ${max}`,'red');



}

// Check if Won

if(guess===winningNum){

  // Game Won

  guessInput.disabled=true;

  //Change the border color

  guessInput.style.borderColor='green';

  // Set message for winner 

  setMessage(`${winningNum} is Correct , you guessed it right. YOU WIN`,'green')

   // Play Again?

  guessBtn.value = 'Play Again';

  guessBtn.className+='play-again';






}else{

  // Wrong number 

  guessesLeft-=1;

  // Game over

  if(guessesLeft===0){

  guessInput.disabled=true;

  guessInput.style.borderColor='red';

  setMessage(`Game Over ! You Lost , The correct number was ${winningNum}. `,'red')


  // Play Again?

  guessBtn.value = 'Play Again';

  guessBtn.className+='play-again';




  }else{

    // clear input 

    guessInput.value='';

    guessInput.style.borderColor='red';
    setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`,'red')

   
  }

  
  


}





});




// get random winning number 


function getRandomNumber(min,max){

  return Math.floor(Math.random()*((max-min + 1) +min));


}

// Set Message Function 

function setMessage(msg,color){

  message.textContent=msg;
  message.style.color=color;



}




