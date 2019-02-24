
function scanArray(arr, direction) {
  
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
  return Math.abs(scanArray(arr, 'leftRight') - scanArray(arr, 'rightLeft'));
}

let x = [
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [6,2,3,4,5]
]
console.log(diagonalDifference(x))