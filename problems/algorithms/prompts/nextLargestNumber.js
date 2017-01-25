'use strict';

const nextLargestNumber = ( num ) => {
  // if single num, return num
  if ( num < 11 ) {
    return num;
  } else {
    let n = num.toString().split('');
    // Iterate from  right to left
    for ( let i = n.length-1; i >= 0; i--) {
      // Iterate from  right to left
      for ( let j = n.length-1; j >= 0; j--) {
        // From current number find next smallest number
        if ( n[i] > n[j] ) {
          // Swap numbers locations in n array
          let right = n[j], left = n[i];
          n[i] = right, n[j] = left;
          // Make a copy of the array
          let copyLeft = n;
          // Sort numbers right of the left swapped number
          return parseInt(copyLeft.splice(0,j+1).concat(n.sort()).join(''));
        }
      }

    }
  }
};

module.exports = { nextLargestNumber };
