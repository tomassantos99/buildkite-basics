const { subtract } = require('../src/calculator/calculator');

test('Should subtract 5 - 3 properly and return 2', () => {
    
    const firstOperand = 5;
    const secondOperand = 3;

    const resp = subtract(firstOperand, secondOperand);

    expect(resp).toEqual(2);
});