'use strict';

const solution = require('../prompts/plus_minus.js');
const expect = require ('chai').expect;

describe('Arrays', () => {
  describe('Plus Minus', () => {

    it('should be a function', () => {
      expect(solution.plusMinus).to.be.a('function');
    });

    it('should return an array', () => {
      expect(solution.plusMinus(6, [-4,3,-9,0,4,1])).to.be.a('array');
    });
    
    it('should return a string if there is an error', () => {
      expect(solution.plusMinus(7, [-4,3,-9,0,4,1])).to.be.a('string');
    });
    
    it('should return a "Invalid Input." if there is an error', () => {
      expect(solution.plusMinus(7, [-4,3,-9,0,4,1])).to.deep.equal('Invalid input.');
    });
    
    it('should return an array with a length of 3', () => {
      let answer = solution.plusMinus(6, [-4,3,-9,0,4,1]);
      expect(answer.length).to.be.equal(3);
    });
    
    it('should return the correct decimals', () => {
      expect(solution.plusMinus(6, [-4,3,-9,0,4,1])).to.deep.equal([ 0.5, 0.3333333, 0.1666667 ]);
    });

  });
});
