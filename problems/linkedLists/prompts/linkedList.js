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
    // Creates a new head node with val
    let newHead = this.node(val);
    // Checks if both head and tail are null
    if ( this.head === null ) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      // Store current head in newHeads next position
      newHead.next = this.head;
      // Assigns current head to newHead
      this.head = newHead;
    }
  }

  // Adds a node to tail
  addToTail(val) {
    if ( this.head === null && this.tail === null ) {
      this.head = this.node(val);
      this.tail = this.node(val); 
    } else {
      // Sets obj to head
      let obj = this.head;
      // Creates a new tail node with val
      const newTail = this.node(val);
      // Iterates over tail and finds last node
      for ( var key in obj ) {
        if ( obj.next !== null ) {
          // Reassigns obj to current next value
          obj = obj.next
        } else {
          // Found tail, place new node
          obj.next = newTail
        }
      }
      // Update tail with new node
      this.tail = newTail
    }
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

