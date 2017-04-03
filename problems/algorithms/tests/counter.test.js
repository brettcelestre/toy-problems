'use strict';

const solution = require('../prompts/counter.js');
const assert = require ('chai').assert;
const expect = require ('chai').expect;
let counter;

describe('Counter', ()=>{

  beforeEach( ()=> {
    counter = new solution.Counter();
  });

  it('should be a object named Counter', ()=>{
    expect(counter).to.be.a('object');
  });

  it('should start at 0', ()=>{
    expect(counter.get()).to.equal(0);
  });

  it('should increment by one', ()=>{
    counter.increment()
    expect(counter.get()).to.equal(1);
  });

  it('should decrement by one', ()=>{
    counter.increment()
    expect(counter.get()).to.equal(1);
    counter.decrement()
    expect(counter.get()).to.equal(0);
  });

  it('should reset count', ()=>{
    counter.increment(5)
    expect(counter.get()).to.equal(5);
    counter.reset()
    expect(counter.get()).to.equal(0);
  });

  it('should double count', ()=>{
    counter.increment(5)
    expect(counter.get()).to.equal(5);
    counter.double()
    expect(counter.get()).to.equal(10);
  });

  it('should square count', ()=>{
    counter.increment(5)
    expect(counter.get()).to.equal(5);
    counter.square()
    expect(counter.get()).to.equal(25);
  });

});
