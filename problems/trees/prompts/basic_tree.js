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
    let child = new Tree(val)
    child.parent = this
    this.children.push(child)
    return true
  }

  contains(target) {
    return (this.value === target) ?
      true : this.children.some(child => child.contains(target))
  }
  
  countLeaves(){
    // Solution 1
    return this.children.length === 0 ? 1
    : this.children.reduce((total, child) => total + child.countLeaves(), 0);
    
    // Solution 2
    // let count = 0;
    // const subroutine = (node) => {
    //   if ( node.children.length === 0 ){
    //     return count++
    //   } else {
    //     for (var i =0; i<node.children.length;i++){
    //       subroutine(node.children[i]);
    //     }
    //   }
    // }
    // subroutine(this)
    // return count;
  }
  
  traverse(cb){
    cb(this.value)
    this.children.forEach(val => val.traverse(cb))
  }
   
  removeFromParent(target){
    if ( this.value === target ) {
      this.parent.children = this.parent.children.filter(val => val.value !== target);
      return this
    } else {
      for(var child of this.children){
        return child.removeFromParent(target);
      }
    }
  }
  
  depthFirstSearch(){
    
  }
  
};

module.exports = { Tree };
