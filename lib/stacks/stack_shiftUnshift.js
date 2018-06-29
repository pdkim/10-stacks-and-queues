'use strict';

class StackShiftUnShift {

  constructor() {
    this.storage = new Array();
  }

  pop() {
    return this.storage.shift();
  }

  push(item) {
    this.storage.unshift(item);
  }
}

export default StackShiftUnShift;