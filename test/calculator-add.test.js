const { add } = require('../src/calculator/calculator');

test('Should add 5 + 3 properly and return 8', () => {
    
    const firstOperand = 5;
    const secondOperand = 3;

    const resp = add(firstOperand, secondOperand);

    expect(resp).toEqual(8);
});