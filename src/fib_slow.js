// Complexity: O(2^n)
function fib(n) {
  if (n < 0) throw new Error("[Fib]: n must be >= 0");
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

module.exports = {
  fibSlow: fib
};
