'use strict';

const solution = require('../prompts/reverseString.js'),
    assert = require ('chai').assert,
    expect = require ('chai').expect;

describe('Strings', () => {
	describe('Reverse String', () => {

	  it('should have a function called reverseString', () => {
      expect(solution.reverseString).to.be.a('function');
	  });

    it('should reverse order of words in string', () => {
      let test = 'Hello World'
      expect(solution.reverseString(test)).to.equal('World Hello');
    });

    it('should have reverseString method on String prototype', () => {
      expect(solution.String.prototype.reverseString).to.be.a('function');
	  });

    it('should reverse string from String prototype', () => {
      let test = 'Hello World'
      expect(solution.String.prototype.reverseString(test)).to.equal('World Hello');
	  });

  });
});
