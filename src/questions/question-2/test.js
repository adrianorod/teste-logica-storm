const runApp = require('./app');

describe('QUESTION 2', () => {
  test('deve retornar true quando a sequência de brackets é balanceada', () => {
    const brackets = '{[()]}';
    const result = runApp(brackets);
    expect(result).toBeTruthy();
  });

  test('deve retornar false quando a sequência de brackets não é balanceada', () => {
    const brackets = '{[(])}';
    const result = runApp(brackets);
    expect(result).toBeFalsy();
  });
});
