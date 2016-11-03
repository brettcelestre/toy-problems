'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) => {
  let result = false;
  array.forEach(function(val){
    if ( truthTest(val) ) {
      result = true;
    }
  });
  return result;
};

module.exports = { some };
