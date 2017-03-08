'use strict';

const solution = require('../prompts/fibonacci.js'),
      should = require('chai').should(),
      assert = require ('chai').assert;

describe('Math', () => {
  describe('Fibonacci', () => {
    it('should exist', () => {
      should.exist(solution.fibonacci);
    });

    it('should be a function', () => {
      should.exist(solution.fibonacci);
      solution.fibonacci.should.be.a.Function;
    });

    it('should return integers', () => {
      const result = solution.fibonacci(0);
      should.exist(result);
      result.should.be.a.Number;
    });

    it('should handle the base cases with ease', () => {
      solution.fibonacci(0).should.equal(0);
      solution.fibonacci(1).should.equal(1);
    });

    it('should return the Fibonacci number for a given n', () => {
      solution.fibonacci(5).should.equal(8);
      solution.fibonacci(10).should.equal(89);
      solution.fibonacci(20).should.equal(10946);
    });

  });
});
