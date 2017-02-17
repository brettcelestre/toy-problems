document.addEventListener('DOMContentLoaded', function() {
  
  let $li = document.getElementsByTagName('li');
  
  for ( let i = 0; i < $li.length; i++ ){
    $li[i].addEventListener('click', function(e){
      let $indicator = document.getElementsByClassName('indicator');
      console.log('testing: ', e.target.className);
      console.log('id: ', $indicator[0]);
    }); 
  }
  
  
  console.log('colors: ', shuffleArray(['red', 'yellow', 'blue', 'green']));
  
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