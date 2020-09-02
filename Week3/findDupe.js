// Given an array of n+1 numbers between 1 and n find the duplicate. There will only be one duplicate

// For example with an array of 5 numbers, it implies that each number will have a value between 1 and 4 (included). This means there will automatically be at least one duplicate

// O(n) time | O(1) space solution w/ array sort
const findDupe = (input) => {
  input.sort();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i - 1] || input[i] === input[i + 1]) {
      return input[i];
    } else {
      continue;
    }
  }
  // No Duplicates Found
  return false;
};

console.log(findDupe([1, 3, 2, 5, 4, 3]));

// O(n) time | O(n) space solution w/ set
const findDupe2 = (input) => {
  let numbers = new Set();

  for (let i = 0; i < input.length; i++) {
    if (!numbers.has(input[i])) {
      numbers.add(input[i]);
    } else {
      return input[i];
    }
  }
  // No Duplicates Found
  return false;
};

console.log(findDupe2([1, 3, 2, 5, 4, 3]));

// O(n) time | O(n) space solution w/ hash table
const findDupe3 = (input) => {
  let numbers = {};

  for (let i = 0; i < input.length; i++) {
    if (numbers[input[i]] === true) {
      return input[i];
    } else {
      numbers[input[i]] = true;
    }
  }
  // No Duplicates Found
  return false;
};

console.log(findDupe3([1, 3, 2, 5, 4, 3]));
