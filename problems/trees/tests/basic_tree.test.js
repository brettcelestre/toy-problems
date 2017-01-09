'use strict';

const solution = require('../prompts/basic_tree.js'),
      assert = require('chai').assert,
      expect = require('chai').expect;
		

describe('Trees', function() {
	
	describe('Basic tree', function (){
		
		let tree;
		
		beforeEach(function() {
	    tree = new solution.Tree();
	  });
		
		it('should have a method named "contains"', function() {
	    expect(tree.contains).to.be.a('function');
	  });
	  
	  it('should return true when adding a children to the tree', function(){
	    expect(tree.addChild(5)).to.equal(true);
	  });

	  it('should add children to the tree', function() {
	    tree.addChild(5);
	    assert.equal(tree.children[0].value, 5);
	  });

	  it('should find contained values', function(){
	    tree.addChild(5);
	    assert.isTrue(tree.contains(5));
	  });

	  it('should add grandchildren', function() {
	    tree.addChild(5);
	    tree.children[0].addChild(6);
	    assert.isTrue(tree.contains(6));
	  });
	  
	  it('should return false for a value that was not added', function() {
	    tree.addChild(5);
	    expect(tree.contains(6)).to.equal(false);
	  });

	});
});

