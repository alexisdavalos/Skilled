// Implement Queue data structure with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class Queue {
  constructor() {
    // Initialize somewhere to store the items in the queue
    this.storage = {};
    this.size = 0;
    this.remover = 0;
  }

  // O(1) time | O(1) space
  enqueue(item) {
    // Increment queue size
    this.size += 1;
    // Checks if key already exists
    while (this.storage[this.size]) {
      // Keep incrementing
      this.size += 1;
    }
    // Add new item
    this.storage[this.size] = item;
  }
  // O(1) time | O(1) space
  dequeue() {
    if (this.size > 0) {
      // Grabs the first item from the queue
      this.remover += 1;
      let item = this.storage[this.remover];
      // Deletes the front of the queue
      delete this.storage[this.remover];
      // Decrements the queue size
      this.size -= 1;
      // Check if queue is empty
      if (this.size === 0) {
        // Reset remover
        this.remover = 0;
      }
      // Returns the item
      return item;
    } else {
      return "Queue is Empty!";
    }
  }
}

const myQueue = new Queue();

myQueue.enqueue(4);
myQueue.enqueue(7);
console.log("Queue:", myQueue.storage);
console.log(myQueue.dequeue());
myQueue.enqueue(9);
myQueue.enqueue(8);
myQueue.enqueue(7);
console.log("Queue:", myQueue.storage);
console.log(myQueue.dequeue());
myQueue.enqueue(19);
console.log("Queue:", myQueue.storage);
console.log(myQueue.dequeue());
console.log("Queue:", myQueue.storage);
