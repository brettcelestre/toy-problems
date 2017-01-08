'use strict';

const spiralTraversal = ( matrix, output = []) => {
  // SOLUTION 1
  let newMatrix = [];
  if (matrix.length > 1){
    // Iterate through first array
    for(let val of matrix[0]){
      // Push values into output
      output.push(val);
    }
    // Take off first array
    matrix.shift();
    // Rotate matrix counter clockwise
    for ( var i = matrix[0].length - 1; i >= 0; i-- ) {
      var temp = [];
      for ( var j = 0; j < matrix.length; j++ ) {
        temp.push(matrix[j][i]);
      }
      newMatrix.push(temp); 
    }
  } 
  // Checks if it is the last array
  if ( newMatrix.length === 1 || matrix.length === 1 ) {
    let finalMatrix;
    // Checks which matrix we're dealing with, sets a final matrix
    newMatrix.length ? finalMatrix = newMatrix : finalMatrix = matrix;
    // Reduces remaining matrix values into output
    output = finalMatrix.reduce(function(a,b){
      return a.concat(b);
    }, output);
    return output;
  } 
  // Call spiralTraversal on new matrix
  return spiralTraversal(newMatrix, output);
};

// let matrix9 = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ];
// let small = [[1]];
// console.log('spiralTraversal: ', spiralTraversal(small));

module.exports = { spiralTraversal };


