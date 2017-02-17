document.addEventListener('DOMContentLoaded', function() {
  
  let $li = document.getElementsByTagName('li'),
      $reset = document.getElementById('reset'),
      $indicator = document.getElementsByClassName('indicator');
  
  for ( let i = 0; i < $li.length; i++ ){
    $li[i].addEventListener('click', function(e){
      let $indicator = document.getElementsByClassName('indicator');
      console.log('testing: ', e.target.className);
      console.log('id: ', $indicator[0]);
    }); 
  }
  
  $reset.addEventListener('click', function(e){
    console.log('Reset Clicked');
    // Invokes simonStartColors with shuffled order
    simonStartColors(shuffleArray(['red', 'yellow', 'blue', 'green']));
  });
  
  // simonStartColors creates a new round of Simon Says
  const simonStartColors = (colors) => {
    console.log('simonStartColors colors: ', colors);
    let time = 500;
    colors.forEach(function(val){
      setTimeout(function(){ 
        console.log('val: ', val);
      }, time);
      time += 500;
    });
  };
  
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

const simonVerifier = (simonsOrder, usersOrder) => {
  // check if they are the same
  // Show win state
  // Ask to play again
};

module.exports = { simonSays };