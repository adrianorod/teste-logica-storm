const runApp = require('./app');

describe('QUESTION 1', () => {
  const arrMock = [2, 7, 11, 15];

  test('deve retornar indices de array que se somam ao alvo', () => {
    const target = 9;
    const result = runApp(arrMock, target);
    expect(result).toStrictEqual([0, 1]);
  });

  test('deve retornar 0 quando não houver alvo', () => {
    const target = 10;
    const result = runApp(arrMock, target);
    expect(result).toStrictEqual(0);
  });
});
