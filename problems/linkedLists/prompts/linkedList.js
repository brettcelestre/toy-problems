'use strict';

class LinkedList {

  constructor(value) {
    // TODO: implement constructor
    this.head = null
    this.tail = null
    let node = {};
    node.value = value;
    node.next = null;
    // return node;
  }

  contains(val) { // Returns a boolean indicating whether the input value is present
    // TODO: Implement contains method
  }

  indexOf(val) { // Returns the numerical order or "index" of the node with value. Returns -1 if not present
    // TODO: Implement indexOf method
  }

  addToHead(val) { // Adds a node to head
    // TODO: Implement addToHead method
  }

  addToTail(val) { // Adds a node to tail
    // TODO: Implement addToTail method
    // if ( this.head === null && this.tail === null ) {
    //   this.head = this.node(val);
    //   this.tail = this.node(val); 
    // } else {
    //   let obj = this.head;
    //   for ( var key in obj ) {
    //     if ( )
    //   }
    // }
  }

  insertAfter(node, val) { 
    // Given a node and value, it acts similar to addToTail, except it creates a node after the input node
    // TODO: Implement insertAfter method
  }
  
  node(val) {
    const newNode = {
      value: val,
      next: null
    }
    return newNode
  }
  
}

module.exports = { LinkedList };

const myList = new LinkedList();
console.log('head', myList.head);
