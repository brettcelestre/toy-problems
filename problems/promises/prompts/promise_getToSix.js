'use strict';

// Function getToSix uses a promise to check whether you rolled a
// six or not. getToSix checks your roll againest every number
// starting at 1, until it reaches six. If it doesn't make it to
// six, the promise rejects your roll and displays an error.

const getToSix = (
    count = 0,
    num = Math.floor(Math.random() * 6) + 1) => {

  let checkRollPromise = new Promise (
    (resolve, reject) => {

      if ( count == num && count < 6) reject(`Sorry, only rolled a ${num}, you didn't make it to 6. Nice try.`)

      if ( count <= num && count <= 6 ) resolve({'count': ++count, 'num': num})

    }
  )

  checkRollPromise
    .then(
      data => {
        if ( data['count'] < 6 ) {
          console.log(`You rolled at least a ${data['count']}! Let's see if you made it to the next number...`);
          getToSix(data['count'], data['num'])
        } else {
          console.log('Congrats, you rolled a 6!');
          return true
        }
      })
    .catch(
      error => {
        console.log(error)
        return false
      }
    )}

// getToSix();

module.exports = { getToSix }
