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

    if (!this.head) {
      this.head = node;
      this.foot = node;
    }
    else {
      let prevHead = this.head;
      this.head = node;
      this.foot = node;
      node.next = prevHead;
    }
  }

  //pop Big O === O(1)
  pop() {
    if (!this.head) {
      return 'Bad Request';
    }

    let currNode = this.foot;


    let prevHead = currNode.value;
    this.head = this.head.next;
    return prevHead;
  }

  //serialize Big O === O(n)
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

  //deserialize Big O === O(n)
  static deserialize(str) {
    let stack = new Stack;
    let toArray = str.split(', ');

    for (let i = 0; i < toArray.length; i++) {
      stack.push(parseInt(toArray[i]));
    }
    return stack;
  }

}

module.exports = Stack;