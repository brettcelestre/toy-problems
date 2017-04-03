'use strict';

const solution = require('../prompts/tripletSum.js'),
      should = require('chai').should(),
      assert = require('chai').assert,
      expect = require('chai').expect;

describe('Triplet', () => {
  describe('Triplet Basic', () => {

    it('should exist', () => {
      should.exist(solution.tripletSum);
    });

    it('should return an array if tripletSum found', () => {
      solution.tripletSum([12, 3, 4, 1, 6, 9], 24).should.be.a('array');
    });

    it('should return an false if no tripletSum is found', () => {
      solution.tripletSum([12, 3, 4, 1, 6, 9], 100).should.equal(false);
    });

    it('should return an array of all triplet sets found', () => {
      solution.tripletSum([12, 3, 4, 1, 6, 9], 24).should.have.lengthOf(3);
      expect(solution.tripletSum([12, 3, 4, 1, 6, 9], 24)).to.deep.equal([[6,9,9],[3,9,12],[6,6,12]]);
    });

  });

  describe('Triplet Error Handling', () => {

    it('should return array error', () => {
      solution.tripletSum('[12, 3, 4, 1, 6, 9]', 24).should.equal('Your first parameter must be an array.');
    });

    it('should return number error', () => {
      solution.tripletSum([12, 3, 4, 1, 6, 9], true).should.equal('Your second parameter must be a number.');
    });

  });

});
