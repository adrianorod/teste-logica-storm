const runApp = require('./app');

describe('QUESTION 3', () => {
  test('deve retornar o lucro máximo quando houver possibilidade', () => {
    const actions = [7, 1, 5, 3, 6, 4];
    const result = runApp(actions);
    expect(result).toStrictEqual(5);
  });

  test('deve retornar 0 quando não houver possibilidade de lucro', () => {
    const actions = [7, 6, 5, 4, 3, 2];
    const result = runApp(actions);
    expect(result).toStrictEqual(0);
  });
});
