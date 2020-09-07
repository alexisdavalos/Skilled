// Implement a special stack data structure with the standard push and pop functions. In addition, we want to add a getMin function. Imagine that a caller has an instance of your stack in memory. They’ve called push and pop a bunch of times, and now they can call getMin to get the smallest value on the stack. Ideally, we’d like each of these methods to be run at constant complexity.

class CoolStack {
  constructor() {
    // Initialize storage for the stack
    this.storage = {};
    // Initialize storage for min
    this.minStack = [];
    // Initialize stack size
    this.size = 0;
  }

  // O(1) time | O(1) space
  pop() {
    // Check array size
    if (this.size > 0) {
      // Grab item from top of stack
      let item = this.storage[this.size];
      // Delete item from storage
      delete this.storage[this.size];
      // Decrement stack size
      this.size -= 1;

      // Case: Popped current minimum
      if (item === this.getMin()) {
        // Pop from minimum stack
        this.minStack.pop();
      }
      return item;
    } else {
      return "Stack is empty!";
    }
  }
  // O(1) time | O(1) space
  push(item) {
    // First item pushed onto stack
    if (this.size === 0) {
      this.minStack.push(item);
    } else if (item < this.getMin()) {
      // Item is less than current minimum
      this.minStack.push(item);
    }
    // Increase stack size
    this.size += 1;
    // Push element onto stack
    this.storage[this.size] = item;
  }

  getMin() {
    // O(1) time | O(1) space
    return this.minStack[this.minStack.length - 1];
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
