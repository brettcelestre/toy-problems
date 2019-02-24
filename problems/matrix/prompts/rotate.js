
/*
 * Rotate a matrix 90 degrees.
 * 
 * Function should take in two arguments, 
 *  Integer - size
 *  String - direction, either 'clockwise' or 'counterClockwise'
 */

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function rotateMatrix (size, direction) {

  // Build original matrix
  let originalMatrix = [];
  for (let i = 0; i < size; i++) {
    let temp = [];
    for (let y = 0; y < size; y++) {
      temp.push(alphabet[Math.floor(Math.random() * 24)])
    }
    originalMatrix.push(temp);
  }

  console.log('Original Matrix');
  console.log(originalMatrix);

  console.log('---------------');

  function clockwiseMatrix() {
    let clockwiseMatrix = [];
    for ( let x = (size - 1); x >= 0; x--) {
      let temp = [];
      for (let z = 0; z <= (size - 1); z++) {
        temp.push(originalMatrix[z][x]);
      }
      clockwiseMatrix.push(temp);
    }
    return clockwiseMatrix;
  }
  // console.log(clockwiseMatrix());

  switch(direction){
    case 'clockwise':
      return clockwiseMatrix();
      break;
    case 'counterClockwise':
      return counterClockwise();
      break;
    default:
      return new Error();
  }
};

console.log(rotateMatrix(4, 'clockwise'));

module.exports = { rotateMatrix };