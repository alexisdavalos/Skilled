// Implement a special stack data structure with the standard push and pop functions. In addition, we want to add a getMin function. Imagine that a caller has an instance of your stack in memory. They’ve called push and pop a bunch of times, and now they can call getMin to get the smallest value on the stack. Ideally, we’d like each of these methods to be run at constant complexity.

class CoolStack {
  constructor() {
    // Initialize storage for the stack
    this.storage = [];

    // Initialize minimum val in the stack
    this.minimum = 0;
  }

  pop() {
    // O(1) time | O(1) space
    let item = this.storage.pop();

    // Popped current minimum
    if (item === this.minimum) {
      let newMinimum = this.storage[0];

      // Loop through storage and find next lowest num O(n) time | O(1) space
      for (let i = 0; i < this.storage.length; i++) {
        // Check for new minimum
        if (this.storage[i] < newMinimum) {
          newMinimum = this.storage[i];
        }
      }

      // replace minimum in stack
      this.minimum = newMinimum;

      // Return the item popped from stack
      return item;
    } else {
      return item;
    }
  }

  push(item) {
    // O(1) time | O(1) space
    // Check if stack is empty
    if (this.storage.length === 0) {
      // New item becomes the minimum
      this.minimum = item;
      this.storage.push(item);
    } else {
      // Check if item is less than current minimum
      if (item < this.minimum) {
        // Override the current minimum
        this.minimum = item;

        // Push element onto stack
        this.storage.push(item);
      } else {
        // item is greater than or equal to minimum so push item onto stack
        this.storage.push(item);
      }
    }
  }

  getMin() {
    // O(1) time | O(1) space
    return this.minimum;
  }
}

// Test case

let newStack = new CoolStack();
newStack.push(2);
newStack.push(789);
newStack.push(6);
console.log("Min", newStack.getMin());
newStack.push(1);
newStack.push(26);
console.log("Popped off", newStack.pop());
console.log("Min", newStack.getMin());
console.log("Popped off", newStack.pop());
newStack.push(18);
newStack.push(24);
console.log("Popped off", newStack.pop());
console.log("Min", newStack.getMin());

/* Output
Min 2
Popped off 26
Min 1
Popped off 1
Popped off 24
Min 2
*/
