// Write your own map function ‘oddMap' that can be called on any array and will return a modified array replacing all even numbers with odd ones.
//
// For example, once you run your code you should be able to do:
//
// let myArr = [2, 5, 7, 8, 14];
// myArr.oddMap() —> [1, 5, 7, 7, 13]

Array.prototype.oddMap = function () {
  // Create copy of array being invoked
  let originalArray = this;
  let newArray = new Array(originalArray.length);

  // Loop through invoked array
  for (let i = 0; i < newArray.length; i++) {
    // Check if number is even
    if (originalArray[i] % 2 === 0) {
      // Subtract 1 from number to made it odd and add to new array
      newArray[i] = originalArray[i] - 1;
    } else {
      // Add original number
      newArray[i] = originalArray[i];
    }
  }

  // Return a new modified array
  return newArray;
};

// Test case
let myArr = [1, 2, 5, 7, 8, 14];
console.log(myArr.oddMap());
console.log(myArr);
