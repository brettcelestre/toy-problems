'use strict';

// reverse and return an array in place (space complexity of O(1))
const reverseArrayInPlace = array => {
  let count = array.length;
  for ( var i = (count - 1); i >= 0; i-- ) {
    array.push(array[i]);
  }
  for ( var i = (count - 1); i >= 0; i-- ) {
    array.shift();
  }
  return array;
};

module.exports = { reverseArrayInPlace };
