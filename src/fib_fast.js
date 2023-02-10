class DinamicFibonnaciCache {
  constructor() {
    this.cache = {};
  }

  get(n) {
    return this.cache[n];
  }

  set(n, value) {
    this.cache[n] = value;
  }

  has(n) {
    return Object.hasOwnProperty.call(this.cache, n);
  }
}

// Complexity: O(n)
function actualFib(n, cache) {
  if (n < 2) return n;
  if (cache.has(n)) return cache.get(n);

  const value = actualFib(n - 1, cache) + actualFib(n - 2, cache);
  cache.set(n, value);

  return value;
}

function fib(n) {
  const cache = new DinamicFibonnaciCache();
  return actualFib(n, cache);
}

module.exports = {
  fibFast: fib,
};
