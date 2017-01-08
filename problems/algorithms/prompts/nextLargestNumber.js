'use strict';

const nextLargestNumber = ( num ) => {
  console.log('original num: ', num);
  
  // if single num, return num
  if ( num < 11 ) {
    return num;
  } else {
    let n = num.toString().split('');
    console.log('n: ', n);
    // Iterate from  right to left
    for ( let i = n.length-1; i >= 0; i--) {
      console.log('n[i]: ', n[i]);
      
      for ( let j = n.length-1; j >= 0; j--) {
        // Find next smallest number
        if ( n[i] > j ) {
          
        }  
      }
      
    }
  }
};

console.log('n: ', nextLargestNumber(123));

module.exports = { nextLargestNumber };
