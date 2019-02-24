'use strict';

class LinkedList {

  constructor(value) {
    this.head = null
    this.tail = null
  }

  // Returns a boolean indicating whether the input value is present
  contains(val) {
    
  }

  // Returns the numerical order or "index" of the node with value. Returns -1 if not present
  indexOf(val) {
    
  }

  // Adds a node to head
  addToHead(val) {
    
  }

  // Adds a node to tail
  addToTail(val) {
    
  }

  insertAfter(node, val) { 
    // Given a node and value, it acts similar to addToTail, except it creates a node after the input node
    // TODO: Implement insertAfter method
  }
  
  // Creates a new node
  node(val) {
    return {
      value: val,
      next: null
    }
  }
  
}

module.exports = { LinkedList };

