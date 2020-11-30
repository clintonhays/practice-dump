const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;

function getRandomNumber (upper) {
  return Math.floor(Math.random() * upper) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Evaluate user guess to match random number
for (let i = 1; i <= 10; i++) {
  let guess = prompt(`I'm thinking of a number between 1 & 10. What is it?`);
  if (parseInt(guess) === randomNumber) {
    message = `Congrats! ${randomNumber} is right! It took you ${i} tries to guess the number.`;
    break;
  } else {
    message = `Nice try...the number was ${randomNumber}.`;
  }
}
//  2) Display a message letting the user know they guessed the number
main.innerHTML = `<h1>${message}</h1>`;
