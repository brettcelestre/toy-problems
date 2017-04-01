
var data = [
  {
    'title': 'Grant',
    'year': 2017,
    'sizes': {
      'large': {
          'src': './img/Grant_0_Large.jpg',
          'width': 1500,
          'height': 1001
      },
      'medium': {
          'src': './img/Grant_0_Medium.jpg',
          'width': 1100,
          'height': 734
      },
      'small': {
        'src': './img/Grant_0_Small.jpg',
        'width': 800,
        'height': 534
      }
    }
  },1,2,3,4,5,6
];

var $viewer = document.getElementsByClassName('viewer'),
    $size = document.getElementsByClassName('size'),
    $next = document.getElementById('next'),
    $back = document.getElementById('back'),
    current = 0;

$next.onclick = function next(){
  if ( current <= data.length ){
    current++;
    console.log(current);
  }
}
$back.onclick = function back(){
  if ( current > 0 ){
    current--;
    console.log(current);
  }
}

// fn = find window width x height
window.onresize = function updateImageSize(){

  var currentImageSize, width, height;
  // window.self.innerWidth / innerHeight
  console.log(window.self.innerWidth);
  // Large
  // if ( 1500 < window.self.innerWidth ) {
  // // Medium
  //   size[0].innerHTML = '<h5>Large</h5>';

  if ( window.self.innerWidth >= 1100 ) {
    // size[0].innerHTML = '<h5>' + window.self.innerWidth + ' x ' + window.outerHeight + '</h5>';
    $size[0].innerHTML = '<h5>Large</h5>'
  // Small
  // if ( 1099 >= window.self.innerWidth >= 800 ) {
  } else if ( 1099 >= window.self.innerWidth && 800 <= window.self.innerWidth) {
    // size[0].innerHTML = '<h5>' + window.self.innerWidth + ' x ' + window.outerHeight + '</h5>';
    $size[0].innerHTML = '<h5>Medium</h5>';
  // Small
  } else if ( 799 >= window.self.innerWidth ) {
    // size[0].innerHTML = '<h5>' + window.self.innerWidth + ' x ' + window.outerHeight + '</h5>';
    $size[0].innerHTML = '<h5>Small</h5>';
    $viewer[0]['innerHTML'] = '<img src="' + current + '" width="' + current + '" height="50px"/>';
  }
}
console.log(window);

// on window resize - invoke window size check
// window.onresize=updateImageSize;

// viewer[0]['innerHTML'] = '<img src="' + current + '" width="' + current + '" height="50px"/>';
