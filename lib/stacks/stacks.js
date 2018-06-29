'use strict';

let popPush = require('./stacks_popPush.js');
let shift = require('./stack_shiftUnshift.js');

class Stack {

  constructor(type) {
    let implementation = shift;
    switch(type) {
    case 'popPush':
      implementation = popPush;
      this.stack = new implementation();
      break;

    case 'shift':
      implementation = shift;
      this.stack = new implementation();
      break;

    default: 
      this.stack = new implementation();
      break;
    }
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop;
  }
}

export default Stack;