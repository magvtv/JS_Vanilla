const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateWordCombinations = (input) => {
    // Remove spaces and convert to lowercase
    input = input.replace(/\s+/g, '').toUpperCase();

    // trying to make it dynamic output based on format
    // if (format === '1') {
    //   input = input.replace(/\s+/g, '').toUpperCase();
    // } else {
    //   input = input.replace(/\s+/g, '').toLowerCase();
    // }
  
    // Define a function to calculate the factorial
    function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    }
  
    // Initialize an array to store the combinations
    const combinations = [];
  
    // Define a recursive function to generate combinations
    function generate(word, remaining) {
      if (word.length === input.length) {
        combinations.push(word);
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        generate(word + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }

    // Calculate the total number of combinations
    const totalCombinations = factorial(input.length);
  
    // Generate and display combinations
    generate('', input);
    combinations.forEach((word, index) => {
      console.log(`${index + 1}. ${word}`);
    });
  
    // Display the total number of combinations
    console.log(`Total combinations: ${totalCombinations}`);
    rl.close()
  }
  


  // let userInput = rl.question('Enter word or phrase: ')
  // let format = rl.question('Select output format: \n1. UPPERCASE\n2. lowercase')
  const userInput = 'vermeer'
  generateWordCombinations(userInput);
  