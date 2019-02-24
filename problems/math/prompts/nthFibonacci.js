/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 * BONUS: Implement a solution that uses memoization to make this more efficient.
 */

const nthFibonacci = (num, memo) => {
  // memo = memo || {};
  // if (memo[n]) return memo[n];
  // if (n <= 1) return 1;
  // return memo[n] = nthFibonacci(n - 1, memo) + nthFibonacci(n - 2, memo);

  // if (num <= 1) return 1;
  // return nthFibonacci(num - 1) + nthFibonacci(num - 2);

  // let results = {};
  // // checks if n has
  // if ( results[n] ){
  //   return results[n];
  // }
  //
  // if ( n <= 2 ) {
  //   return n;
  // }
  // let final = nthFibonacci(n - 1) + nthFibonacci(n - 2);
  //
  // return final;
};

module.exports = { nthFibonacci };
