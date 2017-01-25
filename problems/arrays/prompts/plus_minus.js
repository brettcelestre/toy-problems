'use strict';

// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Input Format:
// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

/* Sample Input: 
6
-4 3 -9 0 4 1 
*/

/* You must print the following  lines:
1) A decimal representing of the fraction of positive numbers in the array.
2) A decimal representing of the fraction of negative numbers in the array.
3) A decimal representing of the fraction of zeroes in the array.
*/

/* Sample Output:
0.500000
0.333333
0.166667
*/

const plusMinus = (size, arr) => {
  if ( typeof size === 'number' 
    && Array.isArray(arr) === true 
    && size === arr.length ) {
    let positive = 0,
        negative = 0,
        zero = 0;
    arr.forEach(n =>{
      if (n > 0) {
        positive++
      } else if (n < 0) {
        negative++
      } else if ( n == 0 ) {
        zero++
      }
    });
    let positiveFraction = positive / size,
        negativeFraction = negative / size,
        zeroFraction = zero / size;
    return [positiveFraction.toFixed(7),negativeFraction.toFixed(7), zeroFraction.toFixed(7)];
  } else {
    return 'Invalid input.'
  }
};

module.exports = { plusMinus };