'use strict';
const solution = require('../prompts/rotate.js'),
assert = require ('chai').assert;

describe('Matrix - Rotate 90 Degrees', () => {

  it('should identify linked list with a cycle', () => {
    assert.equal(solution.hasCycle(linkedList), true);
  });

  it('it should identify linked list without a cycle', () => {
    assert.equal(solution.hasCycle(linkedList), false);
  });
});
