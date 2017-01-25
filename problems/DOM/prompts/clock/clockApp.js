'use strict';

let $clock = document.getElementById('clock');

const currentTime = () => {
  let currentTime = new Date(),
      hour = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = 0 + minutes.toString()
  }
  if (seconds < 10) {
    seconds = 0 + seconds.toString()
  }
  let clock = hour + ':' + minutes + ':' + seconds;
  $clock.innerHTML = '<h3>'+clock+'</h3>';
}
currentTime()
setInterval(function() {
  currentTime()
}, 1000);
