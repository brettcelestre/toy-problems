'use strict';

const solution = require('../prompts/string_generator.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;


describe('String Generator', ()=>{
  
  it('should be a function named stringGenerator', ()=>{
    expect(solution.stringGenerator).to.be.a('function');
  });
  
  it('should return a string', ()=>{
    let word = solution.stringGenerator();
    expect(word).to.be.a('string');
  });
  
  it('should not contain spaces', ()=>{
    expect(solution.stringGenerator()).to.not.contain(' ');
  });

});