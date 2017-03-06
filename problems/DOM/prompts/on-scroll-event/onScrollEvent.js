
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
    console.log('User has scrolled at least 55 px!');
  }
  if( window.pageYOffset<55 && flag) {
    flag = false;
    console.log('User has scrolled above 55 px!');
  }
}
window.onscroll=testScroll

// modules.export { testScroll };