'use strict';
let count = 0;
const spiralTraversal = ( matrix, output = []) => {
  count++;
  console.log('-------');
  console.log('count: ', count);
  console.log('matrix: ', matrix);
  console.log('output: ', output);
  console.log('-------');
  
  // SOLUTION 1
  if (matrix.length > 1){
    // Iterate through first array
    for(let val of matrix[0]){
      // Push values into output
      output.push(val);
    }
    // Take off first array
    matrix.shift();
    // Rotate matrix counter clockwise
    let newMatrix = [];
    for ( var i = matrix[0].length - 1; i >= 0; i-- ) {
        var temp = [];
        for ( var j = 0; j < matrix.length; j++ ) {
          temp.push(matrix[j][i]);
        }
        newMatrix.push(temp); 
      }
      
    if ( newMatrix.length === 1 ) {
      console.log('output ANDREW: ', output);
      output = matrix.reduce(function(a,b){
        return a.concat(b);
      }, output);
      console.log('COMPLETE ----------------------------------');
      console.log('newMatrix: ', newMatrix);
      console.log('output: ', output);
      return output;
    } else {
      // console.log('no?: ');
      // Call spiralTraversal on new matrix
      spiralTraversal(newMatrix, output);
    }
    
  } 
  // console.log('output LAST: ', output);
  // return output;
};


let matrix9 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];

let work = spiralTraversal(matrix9);
// console.log('work: ', work);
console.log('spiralTraversal: ', spiralTraversal(matrix9));

module.exports = { spiralTraversal };


