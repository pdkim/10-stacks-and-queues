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

  enqueue(value) {

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    // let currNode = this.head;
    // let prevHead = this.head;

    // while(currNode.next !== null) {
    //   if(currNode.next === null) {
    //     prevHead.next = currNode;
    //     this.foot = currNode;
    //     break;
    //   }
    //   prevHead = currNode;
    //   currNode = currNode.next;
    // }
    this.foot.next = node;
    this.foot = node;
  }

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