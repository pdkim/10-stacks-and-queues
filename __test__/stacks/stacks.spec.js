'use strict';

const Stack = require('../../lib/stacks/stacks.js');

describe('Stacks module should', () => {

  it('add an element to an empty list', () => {
    
    let list = new Stack;
    expect(list.head).toBeNull();
    
    list.push(1);
    expect(list.head.value).toBe(1);
  
  });


  it('add an element to the array following the LIFO method', () => {
    
    let list = new Stack;
    list.push(1);
    list.push(2);
    expect(list.head.value).toBe(2);
  
  });


  it('remove an element in the array following the LIFO method', () => {
    
    let list = new Stack;
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.foot.value).toBe(3);

    list.pop();
    expect(list.head.value).toEqual(2);
  
  });


  it('convert stack into a string', () => {

    let stack = new Stack;
    stack.push(1);
    stack.push(2);

    let expected = '2 => 1 => X';

    expect(stack.serialize()).toBe(expected);
  });


  it('convert string into a new stack list', () => {

    let list = Stack.deserialize('1, 2, 3');
    
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(1);
    expect(list.head.next.next.next).toBeNull();
  });

});