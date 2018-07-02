##Travis:
[![Build Status](https://travis-ci.com/pdkim/10-stacks-and-queues.svg?branch=pk10)](https://travis-ci.com/pdkim/10-stacks-and-queues)

##Heroku:
https://pk10-stacks-and-queues.herokuapp.com/

##Github:
https://github.com/pdkim/10-stacks-and-queues


##Feature Tasks
Create an application that for stack and queue methods.  Stacks should be able to push and pop elements out of a list following the LIFO rules.  Queues should have a dequeue and enqueue function that should adhere to the FIFO rules.  In addition, queues should have methods to serialize and deserialize data.

###Instructions
1. Clone the repository to your device.
2. In terminal, enter npm i to install all dependencies.
3. If you are creating a new js file, be sure to require the stack.js and queue.js file.
  - for the examples below, we will refer to stack and queue.
4. Create a new stack object and use stack.push(value).  Your list should have a new head node.  You may want to push a couple more values.
5. Use stack.pop.  The last node from the list should be removed.
6. Create a new queue object and use queue.enqueue(value).  An entry should be added in.  Enqueue a couple more times
7. Use queue.dequeue() to remove the first node entry from the list.
8. Use queue.serialize() to convert the new data into its string version.
9. Create a string in the following format, '1, 2, 3, 4', and use queue.deserialize(string).  This should revert the string into a linked list.