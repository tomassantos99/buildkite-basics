const calculator = require('../calculator/calculator')

const routes = {
  'calculator/add': calculator.add,
  'calculator/subtract': calculator.subtract
};

module.exports = routes;
