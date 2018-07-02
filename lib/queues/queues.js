'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null;
    this.next = null;
    this.foot = null;
  }

  //push Big O === O(1)
  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.foot = node;
    }
    let prevHead = this.head;
    this.head = node;
    node.next = prevHead;
  }

  //enqueue Big O === O(1)
  enqueue(value) {

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    this.foot.next = node;
    this.foot = node;
  }

  //dequeue Big O === O(1)
  dequeue() {

    if (!this.head) {
      return 'Bad Request';
    }

    if (!this.head.next) {
      let headVal = this.head.value;
      this.head = null;
      return headVal;
    }

    this.head = this.head.next;
    return this.head.value;
  }


  //serialize Big O = O(n)
  serialize() {
    let stringified = '';
    let currNode = this.head;

    if (!this.head) return `X`;

    while (currNode.next) {
      stringified += `${currNode.value} => `;
      currNode = currNode.next;
    }
    stringified += `${currNode.value} => X`;
    return stringified;
  }

  //deserialize Big O === O(2n)
  static deserialize(str) {
    let queue = new Queue;
    let toArray = str.split(', ');
    let reversed = toArray.reverse();
    
    for (let i = 0; i < reversed.length; i++) {
      queue.push(parseInt(reversed[i]));
    }
    return queue;
  }

}

module.exports = Queue;