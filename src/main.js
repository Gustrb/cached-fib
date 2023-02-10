const { fibSlow } = require('./fib_slow');
const { fibFast } = require('./fib_fast');

function timeIt(label, it) {
  const start = Date.now();
  it();
  const end = Date.now();
  console.log(`${label} took ${end - start}ms`);
}

const TERM_TO_CALCULATE = 45;

timeIt("fibFast", () => fibFast(TERM_TO_CALCULATE));
timeIt("fibSlow", () => fibSlow(TERM_TO_CALCULATE));
