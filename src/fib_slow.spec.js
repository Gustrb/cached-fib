const { fibSlow } = require('./fib_slow');

const FIB_INDEXES = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const EXPECTED_VALUES = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe('fib', () => {
  describe('fibSlow', () => {

    it('should throw an error for n < 0', () => {
      expect(() => fibSlow(-1)).toThrow('[Fib]: n must be >= 0');
    });

    it('should return 1 for n = 1', () => {
      expect(fibSlow(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
      expect(fibSlow(2)).toBe(1);
    });

    FIB_INDEXES.forEach((n, i) => {
      it(`should return ${EXPECTED_VALUES[i]} for n = ${n}`, () => {
        expect(fibSlow(n)).toBe(EXPECTED_VALUES[i]);
      });
    });
  });
});
