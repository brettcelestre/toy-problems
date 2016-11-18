'use strict';

/**
  * Given an input of a Binary Tree and a integer, 
  * return a boolean if the tree contains a path root to leaf that sums to the target.
  *
  * You can assume the Binary Tree will have .left & .right properties.
  *
  * Given the below binary tree and sum of 13:
  *       3
  *      / \
  *     1   2
  *    / \   \
  *   6   9   4
  *
  * Return true, as 3->1->9 = 13
  */

const pathSum = (tree, target, runningTotal = 0) => {
  
  // Updates runningTotal
  runningTotal += tree.value;

  // base cases
  if ( runningTotal > target ) {
    return false;
  } else if ( tree.left === null && tree.right === null ) {
    return runningTotal === target ? true : false;
  }
  
  // left side
  if ( tree.left ) {
    // console.log('tree.left ran');
    if ( pathSum(tree.left, target, runningTotal) ) {
      return true;
    }
  }
  
  // right side
  if ( tree.right ) {
    // console.log('tree.right ran');
    if ( pathSum(tree.right, target, runningTotal) ) {
      return true;
    }
  }
  
  return false;
  
};

module.exports = { pathSum };
