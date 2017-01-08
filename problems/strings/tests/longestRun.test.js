'use strict';

const solution = require('../prompts/longestRun.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;


describe('Longest Run', ()=>{
  it('should be a function named longestRun', ()=>{
    expect(solution.longestRun).to.be.a('function');
  });

  it('should return an array', ()=>{
    expect(solution.longestRun('tooth')).to.be.a('array');
  });
  
  it('should return "tooth" as [1,2]', ()=>{
    expect(solution.longestRun("tooth")).to.deep.equal([1,2]);
  });
  
  it('should return "ttooth" as [0,1]', ()=>{
    expect(solution.longestRun("ttooth")).to.deep.equal([0,1]);
  });
  
  it('should return "hello helllo hellllo" as [15,18]', ()=>{
    expect(solution.longestRun("hello helllo hellllo")).to.deep.equal([15,18]);
  });

});