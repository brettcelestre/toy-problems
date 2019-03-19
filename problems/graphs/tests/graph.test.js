'use strict';

const solution = require('../prompts/graph.js'),
      assert = require('chai').assert;

describe('graph', function() {
  describe('graph constructor & methods', function() {

    let graph;
		
		beforeEach(function() {
	    graph = new solution.Graph();
	  });

    it('should add a Node to the graph and check with contains', function() {
      graph.addNode(1);
      assert.equal(graph.contains(1), true);
    });

    it('should remove nodes that were added', function() {
      graph.addNode(2);
      assert.equal(graph.contains(2), true);
      graph.removeNode(2);
      assert.equal(graph.contains(2), false);
    });

    it('should create edges between two nodes', function() {
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), true);
      assert.equal(graph.hasEdge(1, 2), false);
    });

    it('should remove nodes that were added', function() {
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), true);
      graph.removeEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), false);
    });

    it('should execute a call back on each node in the graph', function() {
      const connectTo0 = function(item) {
        graph.addEdge(0, item);
      };
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.forEachNode(connectTo0);
      assert.equal(graph.hasEdge(0, 1), true);
      assert.equal(graph.hasEdge(0, 2), true);
      assert.equal(graph.hasEdge(0, 3), true);
      assert.equal(graph.hasEdge(0, 4), true);
    });

    it('should return an array of all a nodes edges', function() {
      const graph = new solution.Graph();
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.addEdge(0,1);
      graph.addEdge(0,2);
      graph.addEdge(0,3);
      graph.addEdge(3,4);

      const testEdges1 = [1,2,3];
      let allEdges1 = graph.returnEdges(0);
      assert.deepEqual(allEdges1, testEdges1);

      const testEdges2 = [0,4];
      let allEdges2 = graph.returnEdges(3);
      assert.deepEqual(allEdges2, testEdges2);
    });

    it('should return an array of node values in breadth first order', function() {
      const graph = new solution.Graph();
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.addEdge(0,1);
      graph.addEdge(0,2);
      graph.addEdge(0,3);
      graph.addEdge(3,4);
      const testOrder = [1,2,3,4];
      let bfsList = graph.breadthFirstSearch(0);
      assert.deepEqual(bfsList, testOrder);
    });

    it('should return an array of node values in depth first order', function() {
      const graph = new solution.Graph();
      graph.addNode(4);
      graph.addNode(3);
      graph.addNode(7);
      graph.addNode(12);
      graph.addNode(33);
      graph.addNode(43);
      graph.addNode(71);
      graph.addNode(1030);
      graph.addEdge(4,3);
      graph.addEdge(4,7);
      graph.addEdge(4,12);
      graph.addEdge(4,33);
      graph.addEdge(12,43);
      graph.addEdge(33,43);
      graph.addEdge(43,71);
      graph.addEdge(71,1030);
      const testOrder = [4,3,7,33,43,71,1030,12];
      let dfsList = graph.depthFirstSearch(4);
      assert.deepEqual(dfsList, testOrder);
    });
    
  });
});