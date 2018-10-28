module.exports = function make(...args) {
  const array = args;
  return function execute(...expr) {
    array.push(...expr);
    return expr[0] instanceof Function ? array.filter(item => !(item instanceof Function)).reduce(expr[0]) : execute;
  };
};
