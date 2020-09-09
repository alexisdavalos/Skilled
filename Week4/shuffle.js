// Write your own map function ’shuffle' that can be called on any array and will return a modified array shuffling the values randomly.

Array.prototype.shuffle = function () {
  let newArray = [...this];

  // Loop through new array
  for (let i = 0; i < newArray.length; i++) {
    // Create a random number between 0 and array length:
    let randomNumber = Math.floor(Math.random() * newArray.length);
    let temp = newArray[i];

    // swap cur num with randomNumber
    newArray[i] = newArray[randomNumber];
    newArray[randomNumber] = temp;
  }
  // Return shuffled array
  return newArray;
};

// Test case
let myArr = [1, 2, 5, 7, 8, 14];
console.log("shuffled array:", myArr.shuffle());
console.log("original array:", myArr);
