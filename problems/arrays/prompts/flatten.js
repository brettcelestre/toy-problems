'use strict';

// flatten a nested array into a flat (1D) array
const flatten = arrays => {
	// your code here
  let result = [];
  // Subroutine to iterate over array(s)
  const sub = arrays => {
    arrays.forEach(function(val){
      // Checks if current val is an array
      if ( Array.isArray(val) ) {
        // Invoke sub function with current array
        sub(val);
      } else {
        // Otherwise, push value into result
        result.push(val);
      }
    });
  }
  // Invokes sub with arrays
  sub(arrays);
  // Returns result array
  return result;
};

module.exports = { flatten };

// console.log('flatten: ', flatten([1,2,[3,4,[5,6,7],8],9]));