'use strict';

class LinkedList {

  constructor(value) {
    this.head = null
    this.tail = null
  }

  // Returns a boolean indicating whether the input value is present
  contains(val) {
    // Creates function findValue which takes in a node
    const findValue = (node) => {
      // First checks if the current value is our target val
      if ( node.value === val ) {
        // Returns true
        return true;
      // Second checks if next property is not null
      } else if ( node.next !== null ) {
        // If it has something, invoke findValue with the next node
        return findValue(node.next);
      } else {
        // If we've cycled through the whole list, return false
        return false;
      }
    }
    // Return the result of invoking findValue with this.head ( entire linked list )
    return findValue(this.head);
  }

  // Returns the numerical order or "index" of the node with value. Returns -1 if not present
  indexOf(val) {
    // Creates an function to recursively iterate over linked list, takes node and index
    const findIndex = (node, index) => {
      // Checks if current value is equal to target val
      if ( node.value === val ) {
        // Returns current index
        return index;
      // Makes sure the current node has a next value
      } else if ( node.next !== null ) {
        // Returns findIndex invoked with the next node and the incremented index
        return findIndex(node.next, ++index);
      } else {
        // Return -1 if nothing was found
        return -1
      }
    }
    // Invokes findIndex with entire linked list, and index counter - 0
    return findIndex(this.head, 0);
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

