// Implement Queue data structure with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class Queue {
  constructor() {
    // Initialize somewhere to store the items in the queue
    this.storage = [];
  }
  // O(1) time | O(1 + n) space
  enqueue(item) {
    // Places the item at the beggining of the queue's storage
    this.storage = [item, ...this.storage];
    // Returns the queue with it's new item
    return this.storage;
  }
  // O(1) time | O(1) space
  enqueue2(item) {
    // Places the item at the beggining of the queue's storage
    this.storage.unshift(item);
    // Returns the queue with it's new item
    return this.storage;
  }
  // O(1) time | O(1) space
  dequeue() {
    // Grabs the last item from the queue
    let item = this.storage.pop();
    // Returns the item
    return item;
  }
}

const myQueue = new Queue();

for (let i = 0; i < 5; i++) {
  console.log(myQueue.enqueue(i));
}

for (let i = 0; i < 5; i++) {
  console.log(myQueue.dequeue());
}
