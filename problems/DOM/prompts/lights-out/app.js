// https://en.wikipedia.org/wiki/Lights_Out_(game)

$(document).ready(function(){
  // Stores board map data
  var map = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];
  // Selects board element on DOM
  var $board = $('#board');
  // Builds board
  map.forEach(function(row, rowNumber){
    // Adds a div with class='row' and id=row number
    $board.append('<div class="row" id="' + rowNumber + '"></div>');
    // Iterate over map array
    row.forEach(function(index, indexNumber){
      // Creates board piece with class=square, id= rowNum.toString() += indexNumber.toString()
      var r = rowNumber.toString(),
          i = indexNumber.toString(),
          squareID = r + i; 
      $('#' + rowNumber).append('<div class="square" id="' + squareID + '">' + squareID + '</div>');  
    });
  });
  // Creates a toggle function. Toggle map data from 0>1 or 1>0
  $('.square').click(function(e){
    // Splits and stores row and index of this square
    var squareID = e.target.id.split(''),
        thisRow = parseInt(squareID[0]),
        thisIndex = parseInt(squareID[1]);
    // Toggle function updates map and dom
    var toggleSquares = function(row, index) {
      // Store this id
      var currentRow = row.toString(),
          currentIndex = index.toString(),
          currentID = currentRow + currentIndex;
      // Check map if square exists
      if ( !map[row] ) { return; }
      // Toggles map data for this square
      if ( map[row][index] === 0 ) {
        map[row][index] = 1;
        // Toggles square CSS
        $('#' + currentID).addClass('selected');
      } else if ( map[row][index] === 1 ) {
        map[row][index] = 0;
        // Toggles square CSS
        $('#' + currentID).removeClass('selected');
      }
    };
    // Calls toggleSquares fn with selected square
    toggleSquares(thisRow, thisIndex);
    // Calls toogleSquares 4 more times for other squares
    // Check if square exists inside map, then call toggleSquares
    // TOP
    toggleSquares((thisRow - 1), thisIndex);
    // Left
    toggleSquares(thisRow, (thisIndex - 1));
    // Right
    toggleSquares(thisRow, (thisIndex + 1));
    // Bottom
    toggleSquares((thisRow + 1), thisIndex);
  });
  
});


