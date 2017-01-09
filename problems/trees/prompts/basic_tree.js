'use strict';

/**
  * Implement a basic tree with the methods addChild and contains.
  * Every tree's children should be accessible through .children[]
  * Children should be able to add children directly. 
  */ 

class Tree {
  constructor(val) {
    this.value = val
    this.parent = null
    this.children = []
  }

  addChild(val) {
    this.children.push(new Tree(val));
    return true;
  }

  contains(target) {
    return (this.value === target) ? true :
    this.children.some(child => child.contains(target))
  }
   
};

module.exports = { Tree };
