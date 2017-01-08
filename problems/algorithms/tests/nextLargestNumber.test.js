'use strict';

const solution = require('../prompts/nextLargestNumber.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;


describe('Next Largest Number', ()=>{
  it('should be a function named nextLargestNumber', ()=>{
    expect(solution.nextLargestNumber).to.be.a('function');
  });

  it('should return a number', ()=>{
    expect(solution.nextLargestNumber(1)).to.be.a('number');
  });

  xit('should return an array in spiral order', ()=>{
    expect(solution.nextLargestNumber(
      [
        [3,5,1,6,3],
        [3,6,8,4,2],
        [7,32,2,1,4],
        [4,6,14,61,1]
      ]
    )).to.deep.equal([ 3, 5, 1, 6, 3, 2, 4, 1, 61, 14, 6, 4, 7, 3, 6, 8, 4, 1, 2, 32 ])
  });

});