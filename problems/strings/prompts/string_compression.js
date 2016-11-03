/**
  * Implement a method to perform basic string compression using the counts of repeated characters.
  * If the ‘compressed’ string would not become smaller than the original string,
  * your method should return the original string. 
  *
  * For example:
  * stringCompression('aabbbcddd') // => 'a2b3c1d3'
  * stringCompression('c') // => 'c'
  */

const stringCompression = string => {
  
  let result = '', letter = '', count = 1, flag = false;
  
  const sub = str => {
    for ( var i = 0; i < str.length; i++ ) {
      if ( str[i] === str[i+1] ) {
        letter = str[i];
        count++;
        flag = true;
      } else {
        result += str[i];
        result += count;
        count = 0;
        count++;
        letter = '';
      }
    }
  }
  
  sub(string);
  
  if ( flag && result.length < string.length ) {
    return result
  } else {
    return string
  }
};

module.exports = { stringCompression };
