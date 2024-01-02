let max;
let dupGuessCounter = 0;
let isDuplicate = false; // flag if duplicate is found
let guessArray = new Array(); // store guesses for later access  
let iMessage = document.getElementById("initialMessage");
let message = document.getElementById("message");
let listOfGuesses = document.getElementById("listOfGuesses");

//Optional Refresh, Disable and Display Button Functionality
let guessButton = document.getElementById("button"); 
let playAgainButton = document.getElementById("refresher"); 

guessButton.disabled = false;
playAgainButton.disabled = true;
guessButton.style.display = "inline";
playAgainButton.style.display = "none";

// Take in user input for ceiling(threshold), convert to type number and round it.
max = Math.round(prompt("Enter Max Number"));

// User input validation
while (isNaN(max) || max <= 0 || max == undefined) {
   max = Math.round(prompt("Enter Max Number "));
}

iMessage.innerHTML = `Guess a number between 1 and ${max}.`;

let vMax = Number(max);
console.log(`Maximum Number: ${vMax}`);
const randomNumber = Math.floor(Math.random() * vMax) + 1; // random number between 1 and maximum
const roundNum = Math.round(randomNumber);
console.log(`Random Number: ${roundNum}`);

let higherLower = () => {

   const rNum = roundNum;

   let guessNum = Number(document.getElementById('guess').value);
   let gNum = Math.round(guessNum);
   console.log(gNum);

   //checks to see if guess is a duplicate
   for (i = 0; i < guessArray.length; i++) {
      if (guessArray[i] == gNum) {
         console.log(`${gNum} is a duplicate guess!!!`);
         isDuplicate = true;
         dupGuessCounter++;
         console.log(`Duplicate Guesses: ${dupGuessCounter}`);
      }
      else {
         console.log('Scanning for duplicate....');
      }
   }

   if (gNum > 0 && gNum <= vMax) {

      console.log(`The number entered is: ${gNum}`);      

      if (gNum === rNum && isDuplicate != true) {

         guessArray.push(gNum);
         console.log(`${gNum} stored in array`);

         console.log(`You got it! It took you ${guessArray.length}
      tries, and your guesses were ${JSON.stringify(guessArray)}`);      

      // optional button functionality
      guessButton.disabled = true;
      playAgainButton.disabled = false; 
      guessButton.style.display = "none";
      playAgainButton.style.display = "inline";
      
      message.innerHTML =
            `You got it! It took you ${guessArray.length + dupGuessCounter} tries
      and your valid guesses were ${guessArray.toString()}.`;
         console.log(`Non Duplicate Guesses: ${guessArray.length}`);
         console.log(`Duplicate Guesses: ${dupGuessCounter}`);
      }

      else if (gNum < rNum && isDuplicate != true) {
         console.log(`${gNum} is too low, try again!`);
         message.innerHTML = `${gNum} is too low, try again!`;
         guessArray.push(gNum);
         console.log(`${gNum} stored in array`);
         console.log(`Total guesses: ${guessArray.length + dupGuessCounter}`);
      }

      else if (gNum > rNum && isDuplicate != true) {
         console.log(`${gNum} is too high, try again!`);
         message.innerHTML = `${gNum} is too high, try again!`;
         guessArray.push(gNum);
         console.log(`${gNum} stored in array`);
         console.log(`Total guesses: ${guessArray.length + dupGuessCounter}`);
      }

      else {
         console.log(`You already guessed ${gNum}, try again...`);
         message.innerHTML = `You already guessed ${gNum}, try again...`;
         isDuplicate = false; // resets isDuplicate
      }
   }

   else if (isNaN(gNum)) {
      message.innerHTML = 'That is not a number!';
      console.log('That is not a number!');
   }

   else {
      console.log('That is not a valid number!');
      console.log(`Choose number between 1 and ${vMax}`);
      message.innerHTML = 'That number is not in range, try again!';
   }

}

// Optional - Refreshes the game
let refresher = ()=>{
   location.reload();
}