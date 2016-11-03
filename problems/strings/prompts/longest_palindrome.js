/**
  * A palindrome is a word, phrase, number, or other sequence of characters 
  * which reads the same backward or forward.
  *
  * The function longestPalindrome should take a string as an input and find the longest palindrome within it.
  * You may include spaces. 
  * 
  * For instance:
  * longestPalindrome('dad'); //  => 'dad'
  * longestPalindrome('a'); // => 'a'
  * longestPalindrome('amaryllis sillyrama'); // => 'amaryllis sillyrama'
  */
  
// Checks if string is palindrome
const isPalindrome = (string) => {
  return string === string.split('').reverse().join('');
}

const longestPalindrome = str => {
  let longest = '', collection = str.split('');
  // Iterates over collection
  for ( let i = 0; i <= collection.length; i++ ) {
    // Iterates over collection again for each first iteration
    for ( let j = 0; j <= collection.length; j++ ) {
      // Checks if current substring of the collection is a palindrome
      if ( isPalindrome(str.substring(i,j)) ) {
        // If true, and is longest than current longest string
        if ( str.substring(i,j).length > longest.length ) {
          // Replace longest
          longest = str.substring(i,j);
        }
      }
    }
  }
  return longest;
}

module.exports = { longestPalindrome };
// console.log('longestPalindrome: ', longestPalindrome('aaa bbb cccdd ddeee'));