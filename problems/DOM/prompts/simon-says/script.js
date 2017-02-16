document.addEventListener('DOMContentLoaded', function() {
  
  let $li = document.getElementsByTagName('li');
  
  for ( let i = 0; i < $li.length; i++ ){
    $li[i].addEventListener('click', function(e){
      let $indicator = document.getElementsByClassName('indicator');
      console.log('testing: ', e.target.className);
      console.log('id: ', $indicator[0]);
    }); 
  }
  
});

const simonSays = () => {
  
};

module.exports = { simonSays };