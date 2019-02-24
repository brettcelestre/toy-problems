
function scanArray(arr, direction) {
  let leftRight;
  switch (direction) {
      case 'leftRight':
          leftRight = true;
          break;
      case 'rightLeft':
          leftRight = false;
          break;
      default:
          return new Error('Use a valid direction');
  }
  let row = 0, col = leftRight ? 0 : arr[0].length - 1, total = 0;
  while (arr[row] !== undefined) {
      total += arr[row][col];
      row++;
      col = leftRight ? ++col : --col;
  }
  return total;
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