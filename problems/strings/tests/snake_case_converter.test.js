'use strict';

const solution = require('../prompts/snake_case_converter.js'),
    assert = require('chai').assert;

describe('Strings', () => {
  describe('snake_case converter',  () => {

    it('should be a string',  () => {
      assert.equal(typeof solution.snakeCaseConverter('test'), 'string');
    });

  });
});
