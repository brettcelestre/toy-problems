'use strict';

const solution = require('../prompts/equilibrium.js');
const assert = require ('chai').assert;

describe('Algorithms', () => {

  describe('Equilibrium', () => {
    
    it('Should return 6', () => {
      assert.equal(solution.equilibrium([3,3,6,2,2,2]), 6, 'Should equal 6');
    });
      
    it('Should return 3', () => {
      assert.equal(solution.equilibrium([1,1,1,3,1,1,1]), 3, 'Should equal 3');
    });
    
    it('Should return 4', () => {
      assert.equal(solution.equilibrium([2,2,4,2,2]), 4, 'Should equal 4');
    });
      
  });
  

});
