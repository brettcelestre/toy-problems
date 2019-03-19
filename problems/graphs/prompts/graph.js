'use strict'

const Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.nodes[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this.nodes[fromNode][toNode] && !!this.nodes[toNode][fromNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.nodes ) {
    cb(key)
  }
};

Graph.prototype.returnEdges = function(node) {
  let edges = [];
  for( let key in this.nodes[node]) {
    edges.push(Number(key));
  }
  return edges;
}

// Breadth First Search
Graph.prototype.breadthFirstSearch = function(node, target) {
  let queue = [];
  let history = {
    [node]: true
  }

  const queueChildren = (node) => {    
    let currentChildren = this.returnEdges(node);

    currentChildren.forEach((key) => {
      if (history[key] === undefined) {
        history[key] = true;
        queue.push(key);
        }
    });

    currentChildren.forEach((key) => {
      if (history[key]) {
        history[key] = false;
        queueChildren(key);
      }
    });
  };

  queueChildren(node);
  return queue;
}

// Depth First Search
Graph.prototype.depthFirstSearch = function(node, target) {
  let list = [];
  let queue = [node];
  let history = {
    [node]: true
  }

  const queueChildren = (node) => {
    let currentChildren = this.returnEdges(node);
    console.log('Currentt chilsdf ', currentChildren);

    currentChildren.forEach((childNode) => {

      if (history[childNode] === undefined) {
      
        history[childNode] = true;

        if ((this.returnEdges(childNode)).length) {
          // queueChildren(childNode);
        }

        queue.push(childNode);
      }
    });

  }
  console.log('queue = ', queue);

  queueChildren(node);
  return list;
}

module.exports = { Graph: Graph };