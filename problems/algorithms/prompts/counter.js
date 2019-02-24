/*
Write a function to simulate a counter. It can take a start as an
argument. It will countain an increment and a get method to shows
the current value of the counter.
*/

'use strict';

// ES6

class Counter {

  constructor( start ){
    this.count = start || 0;
  }

  get(){
  }

  increment( value ) {
  }

  decrement( value ) {
  }

  double(){
    
  }

  square(){
  }

  reset() {
  }

};

module.exports = { Counter };


// ES5
function counter( start ) {
  this.count = start || 0;
};

counter.prototype.increment = function( value ) {
  let sum, current = this.count;
  value ? (sum = current + value) : sum = ++current;
  this.count = sum;
};

counter.prototype.decrement = function( value ) {
  let sum, current = this.count;
  value ? (sum = current - value ) : sum = --current;
  this.count = sum;
};

counter.prototype.reset = function() {
  this.count = 0
};

counter.prototype.double = function(){
  this.count *= 2;
};

counter.prototype.get = function(){
  return this.count
};

// module.exports = { counter };
