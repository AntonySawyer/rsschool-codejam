module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, current) => acc + current, 0);
  return arr.map(item => sum - item);
};
