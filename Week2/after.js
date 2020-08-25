//Implement function "after" that takes the number of times the callback can be executed as the first parameter and the callback function as the second parameter.

function after(timesToCall, callback) {
  // after returns function that decrements timesToCall
  return () => {
    if (timesToCall === 0) {
      // Once timesToCall = 0 we don't execute the callback
      return 0;
    } else {
      // Decrement timesToCall and invoke callback function
      timesToCall -= 1;
      callback();
    }
  };
}

// test setup
const myAfterFunc = after(2, () => console.log("test"));

myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // nothing is printed
