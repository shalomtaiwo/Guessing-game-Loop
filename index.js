const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();

readline.question("Enter Player Name: ", (name) => {
  console.log(`Hey there ${name}! \nWelcome to the Guessing game...\n`);
  console.log('A random number is being generated...\n\nYou\'re to guess which number it is');
  console.log('Game starting... in...');
  console.log('3...\n2...\n1...');
  var maxNum = 2;
  var correctNumber = true;
  do {
    var numRange = Math.floor(Math.random() * maxNum) + 1;
    const guessed = prompt(`Guess a number between 1 and ${maxNum}: `);
    if (guessed == numRange) {
      console.log(
        `The random number is ${numRange}\nYou guessed ${guessed}\n\nThat's correct!\n`
      );
      maxNum++;
    } else {
      console.log("Incorrect");
      console.log(`The random number is ${numRange}`);
      console.log('\nGame over...\n\nClosing game...\n');
      correctNumber = false;
    }
  } while (correctNumber);
  readline.close();
});
