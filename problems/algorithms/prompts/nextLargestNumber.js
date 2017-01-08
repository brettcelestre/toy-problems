'use strict';

const nextLargestNumber = ( num ) => {
  console.log('original num: ', num);
  
  // if single num, return num
  if ( num < 11 ) {
    return num;
  } else {
    let n = num.toString().split('');
    // console.log('n: ', n);
    // Iterate from  right to left
    for ( let i = n.length-1; i >= 0; i--) {
      // console.log('n[i]: ', n[i]);
      // Iterate from  right to left
      for ( let j = n.length-1; j >= 0; j--) {
        // From current number find next smallest number
        if ( n[i] > n[j] ) {
          // console.log('next smallest num: ', n[i] + ' >' + n[j]);
          // Swap numbers locations in n array
          let right = n[j], left = n[i];
          n[i] = right, n[j] = left;
          console.log('n after swap: ', n);
          // Sort numbers right of the left swapped number
          
          // Join, return
          console.log('n final: ', parseInt(n.join('')));
          return parseInt(n.join(''));
        }  
      }
      
    }
  }
};

console.log('n: ', nextLargestNumber(123));

module.exports = { nextLargestNumber };
