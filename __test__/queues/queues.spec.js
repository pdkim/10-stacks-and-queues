'use strict';

const Queue = require('../../lib/queues/queues.js');

describe('Queues module should', () => {

  it('add an element following FIFO guideline', () => {

    let queue = new Queue;
    queue.push(1);
    queue.enqueue(2);

    expect(queue.foot.value).toBe(2);

  });

  
  it('remove an element following the FIFO guideline', () => {

    let queue = new Queue;
    queue.push(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();

    expect(queue.head.value).toBe(2);
  });


  it('convert a list into a string', () => {

    let queue = new Queue;
    queue.push(1);
    queue.enqueue(2);

    let expected = '1 => 2 => X';

    expect(queue.serialize()).toBe(expected);

  });


  it('convert string into a new list', () => {

    let queue = Queue.deserialize('1, 2, 3');
    console.log(queue);

    expect(queue.head.value).toBe(1);

  });
});