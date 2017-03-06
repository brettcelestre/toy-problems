
// Creates a tall page so scrolling is enabled
for (var i = 0; i < 200; i++ ){
  var node = document.createElement("LI");
  var textnode = document.createTextNode("space");
  node.appendChild(textnode);
  document.getElementById('spacing').appendChild(node);
}

var flag = false;

function testScroll(ev){
  if( window.pageYOffset>55 && !flag) {
    flag = true;
    var $nav = document.getElementsByClassName('nav');
    $nav[0].style.position = 'fixed'
  }
  if( window.pageYOffset<55 && flag) {
    flag = false;
    var $nav = document.getElementsByClassName('nav');
    $nav[0].style.position = 'initial';
  }
}
window.onscroll=testScroll

// modules.export { testScroll };