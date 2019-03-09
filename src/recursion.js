module.exports = function recursion(mainTree) {
  const arr = [];

  function getArr(tree, i) {
    arr[i] = arr[i] ? arr[i].concat([tree.value]) : [tree.value];
    if (tree.left) {
      getArr(tree.left, i + 1);
    }
    if (tree.right) {
      getArr(tree.right, i + 1);
    }
  }
  getArr(mainTree, 0);

  return arr;
};
