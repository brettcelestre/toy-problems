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
    const child = new Tree(val);
    child.parent = this;
    this.children.push(child);
    return true;
  }

  contains(target) {
    return this.value === target ?
      true : this.children.some((val) => val.contains(target));
  }
  
  countLeaves(){
    return this.children.length === 0 ? 1 :
      this.children.reduce((total, child) => total + child.countLeaves(), 0);

    // let count = 0;
    // const subRoutine = (node) => {
    //   if (node.children.length === 0) {
    //     count++;
    //   } else {
    //     for (let i = 0; i < node.children.length; i++) {
    //       subRoutine(node.children[i]);
    //     }
    //   }
    // }
    // subRoutine(this)
    // return count;
  }
  
  traverse(cb){
    
  }
   
  removeFromParent(target){
    
  }
  
        //             1
	      //        2    -    3
	      //     4  -  5   6  -  7
	      //   8 -            9  -  10
        //                      11 -
        
        // [ 1, 2, 4, 8, 5, 3, 6, 7, 9, 10, 11 ]

  depthFirstSearch(){
    let values = [];
    const addToQueue = (tree) => {
      values.push(tree.value);
      if ( tree.children.length) {
        tree.children.forEach((node) => addToQueue(node))
      }
    }
    addToQueue(this)
    return values;
  }

  breadthFirstSearch() {
    let nodesList = [];
    
    return nodesList;
  }
  
};

module.exports = { Tree };
