'use strict';

const solution = require('../prompts/plus_minus.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;

describe('Arrays', () => {
  describe('Plus Minus', () => {

    it('should be a function', () => {
      expect(solution.plusMinus).to.be.a('function');
    });

    it('should return an array', () => {
      expect(solution.plusMinus(6, [-4,3,-9,0,4,1])).to.be.a('array');
    });
    
    it('should return an array with a length of 3', () => {
      let answer = solution.plusMinus(6, [-4,3,-9,0,4,1]);
      expect(answer.length).to.be.equal(3);
    });
    
    // it('...', () => {
    //   expect(solution.plusMinus(6, [-4,3,-9,0,4,1])).to.be.a('array');
    // });

  });
});
