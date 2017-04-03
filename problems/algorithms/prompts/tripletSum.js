/*
Triplet Sum

Given an array and a value, find if there is a triplet in array whose sum is equal to the given value.

If there is such a triplet present in array, then print the triplet and return true. Else return false.

Example:

[12, 3, 4, 1, 6, 9] and 24 => true, triplet (12, 3, 9)
 */

const tripletSum = (array, value) => {

  if ( Array.isArray(array) && typeof value === 'number') {

    // Finds and stores all triple sets
    let allSets = {}
    for ( let i = 0; i < array.length; i++ ) {
      for ( let j = 1; j < array.length; j++ ) {
        for ( let k = 2; k < array.length; k++ ) {
          if ( array[i] + array[j] + array[k] == value ) {
            let key = '' + i + j + k
            allSets[key] = [array[i], array[j], array[k]]
          }
        }
      }
    }

    // Removes duplicates from allSets and sorts each set
    let uniqueSets = {}
    for ( let key in allSets ) {
      uniqueSets[allSets[key].sort().join('')] = allSets[key].sort((a,b) => {
        return a > b
      })
    }

    // Stores all unique sets in an array
    let results = []
    if ( Object.keys(uniqueSets).length > 0 ) {
      for ( let key in uniqueSets ) {
        results.push(uniqueSets[key])
      }
    }

    // returns false is nothing is found and results if triplet set found
    return results.length > 0 ? results : false

  } else if ( !Array.isArray(array) ) {
    return 'Your first parameter must be an array.'
  } else if ( typeof value !== 'number' ) {
    return 'Your second parameter must be a number.'
  }
}

module.exports = { tripletSum }
