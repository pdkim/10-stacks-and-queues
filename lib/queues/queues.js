'use strict';

class Queue {

  constructor() {
    this.storage = new Array();
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    return this.stack.shift;
  }
}

export default Queue;