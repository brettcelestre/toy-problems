'use strict';

const LinkedList = require('../prompts/linkedList.js').LinkedList,
      assert = require('chai').assert;
      let myList;

describe('LinkedList', () => {
  
  beforeEach(() => {
    myList = new LinkedList();
  });
  
  describe('Constructor', () => {
    it('should create a new list with null head and tail', () => {
      assert.equal(myList.head, null, 'Head is not null');
      assert.equal(myList.tail, null, 'Tail is not null');
    });
  });
  
  describe('addToHead', () => {
    it('should add to head and tail when both are null', () => {
      myList.addToHead('First');
      assert.equal(myList.head.value, 'First', 'Head insertion not adding to head');
      assert.equal(myList.tail.value, 'First', 'Head insertion not updating tail when both are null');
    });
    
    it('should replace head with new head', () => {
      myList.addToHead('First');
      myList.addToHead('Second');
      assert.equal(myList.tail.value, 'First', 'Head insertion not updating tail');
      assert.equal(myList.head.value, 'Second', 'Head insertion not updating head');
    });
    
    it('should maintain tail when multiple heads added', () => {
      myList.addToHead('First');
      myList.addToHead('Second');
      myList.addToHead('Third');
      assert.equal(myList.tail.value, 'First', 'Head insertion not maintaining tail');
      assert.equal(myList.head.value, 'Third', 'Head insertion not updating head');
    });
  });
  
  describe('addToTail', () => {
    it('should add to tail and head when both are null', () => {
      myList.addToTail('is how ');
      assert.equal(myList.head.value, 'is how ', 'Head insertion not working');
      assert.equal(myList.tail.value, 'is how ', 'Tail insertion not working');
    });
    
    it('should add to tail and when head is assigned', () => {
      myList.addToTail('First');
      myList.addToTail('Second');
      assert.equal(myList.tail.value, 'Second', 'Tail insertion not working');
      assert.equal(myList.head.value, 'First', 'Head insertion not working');
    });
  });
  
  describe('addToTail & addToHead', () => {
    it('should add items to head and tail', () => {

      assert.equal(myList.head, null, 'Empty initial list');
      myList.addToTail('is how ');
      myList.addToTail('we do it');
      assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');
      assert.equal(myList.head.value, 'is how ', 'Tail insertion not working');
      myList.addToHead('This ');
      assert.equal(myList.head.value, 'This ', 'Head insertion not working');
      assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');

      const montellJordan = 'This is how we do it';
      let output = '';

      for(let i = myList.head; i; i = i.next){
        output += i.value;
      }
      assert.equal(output, montellJordan, 'Head and Tail insertion methods not working');
    });
  });
  
  describe('contains', () => {
    it('should return true if the value exists anywhere in the list', () => {
      myList.addToTail('First');
      myList.addToTail('Second');
      myList.addToHead('Third');
      assert.isTrue(myList.contains('Third'), 'Contains not finding item in head of list');
      assert.isTrue(myList.contains('First'), 'Contains not finding item in body of list');
      assert.isTrue(myList.contains('Second'), 'Contains not finding item in tail of list');
    });

    it('should return false if the value does not exist anywhere in the list', () => {
      myList.addToTail('First');
      myList.addToTail('Second');
      myList.addToHead('Third');
      assert.isNotTrue(myList.contains('Nine'), 'Contains not working for items not in the list');
    });
  });
  
  describe('indexOf', () => {
    it('should return the index if the value exists anywhere in the list', () => {
      myList.addToTail('First');
      myList.addToTail('Second');
      myList.addToHead('Third');
      assert.equal(myList.indexOf('Third'), 0, 'indexOf not finding item in head of list');
      assert.equal(myList.indexOf('First'), 1, 'indexOf not finding item in body of list');
      assert.equal(myList.indexOf('Second'), 2, 'indexOf not finding item in tail of list');
    });
  });

  xit('should insert items after the passed in node', () => {
    const myList = new LinkedList();
    let fourthNode = null;
    for (let i = 0; i < 10; i++) {
      myList.addToTail(i);
      if (i === 3) {
        fourthNode = myList.tail;
      }
    }
    for (let i = 0; i < 10; i++) {
      myList.addToTail(i);
    }
    myList.insertAfter(fourthNode, 3.14159);
    assert.isTrue(myList.contains(3.14159));
    const soln = [0,1,2,3,3.14159,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
    let current = myList.head;
    for (let i = 0; i < soln.length; i++) {
      assert.equal(current.value, soln[i], 'Should only insert once');
      current = current.next;
    }
  });
  
});
