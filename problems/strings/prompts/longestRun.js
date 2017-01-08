/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

const longestRun = ( string ) => {
  console.log('string: ', string);
  let longest = [], 
      count = 0, longestCount = 0, start, stop,
      arr = string.split(''),
      last = arr[0];
  // Iterate over array
  for ( var i = 1; i <= arr.length; i++ ) {
    if ( last == arr[i] ){
      count++;
      stop = i;
      if ( count > longestCount ) {
        longest = [start,stop];
      }
    } else if ( last != arr[i] ) {
      start = i;
      count = 1;
    }
    last = arr[i];
  }  
  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
let randomString = function (len) {
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

module.exports = { longestRun };

// console.log('longestRun(): ', longestRun(randomString(50)));
console.log('longestRun(): ', longestRun('ttooth'));

