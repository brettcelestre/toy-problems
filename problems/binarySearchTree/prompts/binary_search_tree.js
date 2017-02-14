
// Binary Search Tree

class binarySearchTree {
  
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    this.root = arguments[1] || false
  }
  
  insert(value){
    // if current value is greater than new value
    if (this.value > value) {
      // if current left branch is null
      // assign current left branch to new BST with new value
      // else - place new value in left branch
      (!this.left) ? this.left = new binarySearchTree(value) : this.left.insert(value)
    // if current value is less than new value
    } else if ( this.value < value) {
      // if current right branch is null
      // assign current right branch to new BST with new value
      // else - place new value in right branch
      (!this.right) ? this.right = new binarySearchTree(value) : this.right.insert(value)
    }
    // console.log('------------------');
    // console.log('this: ', this);
    return true;
  }
  
  contains(target){
  }
  
  depthFirstLog(){
  }
  
  findHeight(){
  }
  
  balanceFactor(){
    
  }
  
  rotateRight(){
    
  }
  
  rotateLeft(){
    
  }
  
  rebalance(){
    
  }
  
};

module.exports = { binarySearchTree };