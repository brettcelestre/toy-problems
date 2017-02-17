document.addEventListener('DOMContentLoaded', function() {
  
  let $li = document.getElementsByTagName('li'),
      $reset = document.getElementById('reset'),
      $indicator = document.getElementsByClassName('indicator'),
      $defeat = document.getElementsByClassName('defeat'),
      $victory = document.getElementsByClassName('victory'),
      simonsPattern = [],
      userPattern = [];
  
  for ( let i = 0; i < $li.length; i++ ){
    $li[i].addEventListener('click', function(e){
      // Shows selected color on indicator
      $indicator[0].className = 'indicator ' + e.target.className;
      // Adds guess to userPattern
      userPattern.push(e.target.className);
      // Checks to see if pattern is correct
      userPatternCheck();
    }); 
  }
  
  // Checks to see if users pattern was correct
  const userPatternCheck = () => {
    let flag = true;
    if ( userPattern.length ===  4 ) {
      for ( var i = 0; i<4; i++ ) {
        if ( userPattern[i] !== simonsPattern[i] ){
          flag = false;
          $defeat[0].style.visibility = 'visible';
          break;
        }
      }
      if ( flag ) {
        $victory[0].style.visibility = 'visible';
      }
    }
  }
  
  $reset.addEventListener('click', function(e){
    // Invokes simonStartColors with shuffled order
    simonStartColors(shuffleArray(['red', 'yellow', 'blue', 'green']));
  });
  
  // simonStartColors creates a new round of Simon Says
  const simonStartColors = (colors) => {
    console.log('simonStartColors colors: ', colors);
    
    // Resets collections and elements
    $defeat[0].style.visibility = 'hidden';
    $victory[0].style.visibility = 'hidden';
    userPattern = [];
    
    let time = 500;
    // Updates global simonsPattern array
    simonsPattern = colors;
    
    // Shows pattern on indicator
    colors.forEach(function(val){
      setTimeout(function(){ 
        $indicator[0].className = 'indicator ' + val;
      }, time);
      time += 500;
    });
    
    // Sets indicator back to white after pattern shows
    setTimeout(function(){
      $indicator[0].className = 'indicator';
    }, 2500);
    
  };
  
  // Starts Game
  simonStartColors(shuffleArray(['red', 'yellow', 'blue', 'green']));
  
});

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// module.exports = { simonSays };