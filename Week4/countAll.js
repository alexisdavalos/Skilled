// Write a function ‘countAll' that counts all occurrences of a letter in a string
// This method should be available to all String variables once created.
// For example, once you run your code, you should be able to do this
//
// var quote="Brevity is the soul of wit”;
// quote.countAll(‘i') —> 3

String.prototype.countAll = function (target) {
  // Variable initialization
  let string = this;
  let count = 0;

  // Loop through all string's characters
  for (char of string) {
    // Update the count
    if (char === target) {
      count += 1;
    }
  }

  return count;
};

// Test cases
let quote = "Brevity is the soul of wit";
console.log(quote.countAll("i")); // => 3
console.log(quote.countAll("t")); // => 3
console.log(quote.countAll("e")); // => 2
