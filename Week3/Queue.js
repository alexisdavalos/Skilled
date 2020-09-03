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
    // Places the item at the beggining of the queue's storage
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
      // Returns the item
      return item;
    } else {
      return "Queue is Empty!";
    }
  }
}

const myQueue = new Queue();
for (let i = 44; i < 55; i++) {
  myQueue.enqueue(i);
}
console.log("Queue:", myQueue.storage);
for (let i = 0; i < 5; i++) {
  console.log(myQueue.dequeue());
}
console.log("Queue:", myQueue.storage);
