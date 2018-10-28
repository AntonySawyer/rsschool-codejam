const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('sumOfOther function', () => {
  it('default test', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('simple test', () => {
    assert.deepEqual(sumOfOther([4, 5, 6, 3]), [14, 13, 12, 15]);
  });
  it('simple test with negative', () => {
    assert.deepEqual(sumOfOther([0, 1, 2, -1]), [2, 1, 0, 3]);
  });
  it('big array', () => {
    assert.deepEqual(sumOfOther([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [45, 44, 43, 42, 41, 40, 39, 38, 37, 36]);
  });
  it('big negative array', () => {
    assert.deepEqual(sumOfOther([-10, -67, -9, -6, -14, -193, -46, -17, -8, 0]), [-360, -303, -361, -364, -356, -177, -324, -353, -362, -370]);
  });
  it('empty array', () => {
    assert.deepEqual(sumOfOther([]), []);
  });
});