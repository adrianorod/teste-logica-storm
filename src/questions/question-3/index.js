const { rl, question } = require('../../utils');
const runApp = require('./app');

const steps = {
  start: async () => {
    console.log(`Questão 03 - Dado um um array para o qual o elemento i é o preço de uma determinada
    ação no dia i, tendo permissão para concluir no máximo uma transação, o algoritmo encontrará o
    lucro máximo.\n`);
    steps.actions();
  },
  actions: async () => {
    const data = await question('Insira o array de números inteiros de valores de ações (Ex.: [7,1,5,3,6,4]): ');
    const actions = JSON.parse(data);

    if (!Array.isArray(actions)) {
      console.error(`Formato inesperado de array informado (${actions}). Tente novamente.`);
      steps.actions();
    } else {
      steps.end(actions);
    }
  },
  end: async (actions) => {
    rl.close();
    const maxProfit = runApp(actions);
    console.log('Lucro máximo: ', maxProfit);
  },
};

steps.start();
