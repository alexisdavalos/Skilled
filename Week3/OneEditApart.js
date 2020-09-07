// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character

const OneEditApart = (word1, word2) => {
  // variables initialized
  let count = 0;
  let i = 0;
  let j = 0;

  // word difference is more than 1 character
  if (Math.abs(word1.length - word2.length) > 1) {
    return false;
  } else {
    // loop while tracking char index of both words
    while (i < word1.length && j < word2.length) {
      // characters not equal
      if (word1[i] !== word2[j]) {
        // increment edit count
        count += 1;
        if (word1.length > word2.length) {
          // move word1 forward
          i++;
        } else if (word2.length > word1.length) {
          // move word2 forward
          j++;
        } else {
          // move both words forward
          i++;
          j++;
        }
      } else {
        // both characters are equal keep traversing
        i++;
        j++;
      }
    }
    return count > 1 ? false : true;
  }
};

// Test cases

console.log(OneEditApart("cat", "dog")); //= >false
console.log(OneEditApart("cat", "cats")); // => true
console.log(OneEditApart("cat", "cut")); // => true
console.log(OneEditApart("cat", "cast")); // => true
console.log(OneEditApart("cat", "at")); // => true
console.log(OneEditApart("cat", "act")); //= >false
