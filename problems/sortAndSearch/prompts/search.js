/** 
  * Implement two functions to find the index of the element k in a sorted array of numbers.
  * Both algorithms should take log(n) time.
  *
  * Unsuccessful searches should return -1.
  *
  * For Example:
  * searchIterative([1,2,3,4,5,6], 3); // => 2
  * searchIterative([1,2,3,4,5,6], 9); // => -1
  */


const searchIterative = (nums, k) => {
  for ( var i = 0; i < nums.length; i++ ) {
    if ( nums[i] === k ) {
      return i;
    }
  }
  return -1;
}

const searchRecursive = (nums, k, i = 0) => {
  // Base case
  if ( nums.length === i || i > 10 ) {
    return -1
  }
  // Checks if i in nums equals k
  if ( nums[i] === k ) {
    // Returns i
    return i;
  }
  return searchRecursive(nums, k, ++i)
}

module.exports = { searchIterative, searchRecursive };

// const nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(searchRecursive(nums, 0));
// console.log(searchRecursive(nums, 1));
// console.log(searchRecursive(nums, 2));
// console.log(searchRecursive(nums, 3));
