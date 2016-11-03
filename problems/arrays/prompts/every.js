'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  // your code here
  let result = true;
  array.forEach(function(val) {
    if ( !truthTest(val) ) {
      result = false;
    }
  });
  return result;
};

module.exports = { every };

// let nums = [4,5,6,7];
// const test = x => { 
//     return typeof x === 'number';
// };
// console.log('testing: ', every(nums, test));