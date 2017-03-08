
// Create a function that returns the Fibonacci of num
// Also create a way to store previous answers

const fibonacci = (num, memo) => {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num <= 2) return num;
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

module.exports = { fibonacci };
