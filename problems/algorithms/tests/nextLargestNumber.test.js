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
  
  it('should return 9 as 9', ()=>{
    expect(solution.nextLargestNumber(9)).to.equal(9);
  });

  it('should return 123 as 132', ()=>{
    expect(solution.nextLargestNumber(123)).to.equal(132);
  });  
  
  it('should return 12543 as 13245', ()=>{
    expect(solution.nextLargestNumber(12543)).to.equal(13245);
  });  

});