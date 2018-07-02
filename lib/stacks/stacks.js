'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.head = null;
    this.next = null;
    this.foot = null;
  }

  //push Big O === O(1)
  push(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.foot = node;
    }
    let prevHead = this.head;
    this.head = node;
    this.foot = node;
    node.next = prevHead;
  }

  //pop Big O === O(1)
  pop() {
    if(!this.head) {
      return 'Bad Request';
    }

    let currNode = this.foot;

    
    let prevHead = currNode.value;
    this.head = this.head.next;
    return prevHead;
  }
}

module.exports = Stack;