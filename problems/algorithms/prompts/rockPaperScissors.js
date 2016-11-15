'use strict';

/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

const rockPaperScissors = ( limit ) => {
  const options = ['rock', 'paper', 'scissors'];
  let results = [];
  
  const subRoutine = ( permutation ) => {
    // Base case, check length of permutation, if equal to limit
    if ( permutation.length >= limit) {
      // Push current permutation into results array
      results.push(permutation.slice()); // add slice
      // Returns out of recursive call
      return;
    }
    // Iterate over options
    for ( var i = 0; i < options.length; i++ ) {
      // Push current option into permutation
      permutation.push(options[i]);
      // Invoke subRoutine with current permutation
      subRoutine(permutation);
      // Pop permutation after recursive call
      permutation.pop();
    }
  } 
  // Invoke subRoutine with an empty array
  subRoutine( [] );
  return results;
  // return results;
};

module.exports = { rockPaperScissors };
