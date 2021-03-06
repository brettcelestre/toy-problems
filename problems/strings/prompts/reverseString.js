/*
Part 1: Write a function to reverse the order of the words in a string.
ex: 'Hello World' >> 'World Hello'

Part 2: Place the reverse function directly on the string object
*/

const reverseString = ( str ) => {
  return str.split(' ').reverse().join(' ');
}

String.prototype.reverseString = String.prototype.reverseString || function reverseString( str ) {
  return str.split(' ').reverse().join(' ');
}

module.exports = { reverseString, String };
