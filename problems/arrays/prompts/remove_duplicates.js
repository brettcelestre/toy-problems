'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  let unique = {}, results = [];
  array.forEach(function(val){
    unique[val] = val;
  });
  for ( var key in unique ) {
    results.push(unique[key]);
  }
  return results;
};

module.exports = { removeDuplicates };