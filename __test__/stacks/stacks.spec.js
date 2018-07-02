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
    console.log('head is ', list.head.value);
    expect(list.foot.value).toBe(3);

    list.pop();
    console.log(list.head.value);
    expect(list.head.value).toEqual(2);
  
  });

});