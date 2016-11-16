'use strict';

/**
 * Write a function that takes the first node of a singly-linked
 * list which determines if that list has a cycle. A cycle is when
 * a node in the linked list points to another node previous in the
 * list, causing an infinite loop.
 *
 * For example:
 *
 *     [node]->[node]->[node]->[node]
 *                       ^       |
 *                       |       v
 *                     [node]<-[node]
 */

const hasCycle = linkedList => {
  // Stores last value during subRoutine
  let lastValue;
  // subRoutine function takes in a node
  const subRoutine = node => {
    // Check if next value is not null
    if ( node.next !== null ) {
      // Then check if the last value equals the next values value
      if ( lastValue === node.next.value ) {
        // You found a cycle, return true
        return true;
      } else {
        // Updates lastValue with current value
        lastValue = node.value;
        // Invokes subRoutine with next node
        return subRoutine(node.next);
      }
    // Checks if the next value is null && the current value equals the tail value
    } else if ( node.next === null  && node.value === linkedList.tail.value ) {
      // There is no cycle, return false
      return false;
    }
  };
  // Invoke subRoutine with the linkedList's head
  return subRoutine(linkedList.head);
};

module.exports = { hasCycle };
