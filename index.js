// Note this is a nodeJS only console program and will not work with Chrome prompt
// include prompt sync package to run on replit. 
// To run locally install:  npm i prompt-sync
// to run, use this command in the terminal in file directory: node index.js

//BTW - To those of you copying my code and using it for your task... Welldone

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();

var maxNum = 2;
var points = 0;

function guessGame(maxNum) {
  readline.question("Enter Player Name: ", (name) => {
    console.log(`Hey there ${name}! \nWelcome to the Guessing game...\n`);
    console.log(
      "A random number is being generated...\n\nYou're to guess which number it is"
    );
    console.log("Game starting... in...");
    console.log("3...\n2...\n1...");
    var correctNumber = true;
    do {
      var num = Math.floor(Math.random() * maxNum) + 1;
      const guessed = prompt(`Guess a number between 1 and ${maxNum}: `);
      if (guessed == num) {
        console.log(
          `You guessed ${guessed}\nThe random number is ${num}\n\nThat's correct!\n`
        );
        maxNum++;
        points++;
        console.log(`Points: ${points}\n`);
      } else {
        console.log("Incorrect");
        console.log(`The random number is ${num}\n`);
        console.log(`Final Points: ${points}\n`);
        console.log("Game over...\n\nClosing game...\n");
        correctNumber = false;
      }
    } while (correctNumber);
    readline.close();
  });
}
guessGame(maxNum);
