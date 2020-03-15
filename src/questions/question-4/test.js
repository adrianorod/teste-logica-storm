const runApp = require('./app');

describe('QUESTION 4', () => {
  test('deve retornar a quantidade de água acumulada', () => {
    const actions = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const result = runApp(actions);
    expect(result).toStrictEqual(6);
  });

  test('deve retornar 0 quando não houver possibilidade de acúmulo de água', () => {
    const actions = [0, 1, 1, 2, 2, 2, 3, 3, 2, 1, 1, 1];
    const result = runApp(actions);
    expect(result).toStrictEqual(0);
  });
});
