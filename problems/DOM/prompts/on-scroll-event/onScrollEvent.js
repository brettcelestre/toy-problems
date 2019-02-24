
// Creates a tall page so scrolling is enabled
for (var i = 0; i < 200; i++ ){
  var node = document.createElement("LI");
  var textnode = document.createTextNode("space");
  node.appendChild(textnode);
  document.getElementById('spacing').appendChild(node);
}

var flag = false;

function testScroll(ev){
  if( window.pageYOffset >= 54 && !flag) {
    flag = true;
    var $stickie = document.getElementsByClassName('stickie');
    $stickie[0].style.visibility = 'visible';
  }
  if( window.pageYOffset <= 55 && flag) {
    flag = false;
    var $stickie = document.getElementsByClassName('stickie');
    $stickie[0].style.visibility = 'hidden';
  }
}
window.onscroll=testScroll;

// modules.export { testScroll };
