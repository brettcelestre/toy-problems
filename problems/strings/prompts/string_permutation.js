/**
  * A permutation is an arrangement of members of a set.
  * https://en.wikipedia.org/wiki/Permutation
  * 
  * Implement stringPermutation so that it takes two string inputs, and outputs
  * a boolean indicating if on is a permutation of the other. All letters must be included.
  *
  * For instance:
  * stringPermutation('babel', 'lebab') // => true
  * stringPermutation('what', 'wat') // false
  */

const stringPermutation = function(string1, string2) {
  return string1.split('').sort().join('') === string2.split('').sort().join('');
};

module.exports = { stringPermutation };

// stringPermutation('babel', 'lebab');
// stringPermutation('what', 'wat');