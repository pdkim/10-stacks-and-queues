'use strict';

class StackPopPush {

  constructor() {
    this.storage = new Array();
  }

  pop() {
    return this.storage.pop();
  }

  push(item) {
    this.storage.push(item);
  }
}

export default StackPopPush;