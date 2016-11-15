'use strict';

const solution = require('../prompts/rockPaperScissors.js');
const assert = require ('chai').assert;

describe('Algorithms', () => {
  
  describe('Rock Paper Scissors - limit 2', () => {
    it('Should return 9 different permutations of rock, paper, scissors', () => {
      let limitTwo = solution.rockPaperScissors(2); 
      assert.equal(limitTwo.length, 9, 'Length should equal 9');
    });
  });
  
  describe('Rock Paper Scissors - limit 3', () => {
    it('Should return 27 different permutations of rock, paper, scissors', () => {
      let limitThree = solution.rockPaperScissors(3); 
      assert.equal(limitThree.length, 27, 'Length should equal 27');
    });
  });

});
