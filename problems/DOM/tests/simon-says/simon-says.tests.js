'use strict';

const solution = require('../../prompts/simon-says/script.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;


describe('Simon Says', ()=>{
  
  it('should be a function named simonSays', ()=>{
    expect(solution.simonSays).to.be.a('function');
  });

});