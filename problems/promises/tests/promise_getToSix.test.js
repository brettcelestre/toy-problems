'use strict';

const solution = require('../prompts/promise_getToSix.js'),
      should = require('chai').should(),
      assert = require('chai').assert;

describe('Promises', () => {
  describe('Promises Basic', () => {

    it('should exist', () => {
      should.exist(solution.getToSix);
    });

    it('should exist', () => {
      solution.getToSix().should.be.a('boolean');
    });

  });
});
