// config inicial
const { rl, question } = require('../../utils');

let acoes;

// lógica aplicada
const runApp = () => {
  let i = 0;
  let maxProfit = 0;
  let startIndex = 0;
  const limiter = acoes.length - 1;

  while (i < limiter) {
    const profit = acoes[i] - acoes[startIndex];

    if (profit > maxProfit) maxProfit = profit;

    i += 1;

    if (i === limiter && startIndex < limiter) {
      startIndex += 1;
      i = startIndex + 1;
    }
  }

  console.log('Lucro máximo:', maxProfit);
};

// perguntas para obter dados dinamicos
const steps = {
  start: async () => {
    console.log(`Questão 03 - Dado um um array para o qual o elemento i é o preço de uma determinada
    ação no dia i, tendo permissão para concluir no máximo uma transação, o algoritmo encontrará o
    lucro máximo.\n`);
    steps.acoes();
  },
  acoes: async () => {
    const data = await question('Insira o array de números inteiros de valores de ações (Ex.: [7,1,5,3,6,4]): ');
    acoes = JSON.parse(data);

    if (!Array.isArray(acoes)) {
      console.error(`Formato inesperado de array informado (${acoes}). Tente novamente.`);
      steps.acoes();
    } else {
      steps.end();
    }
  },
  end: async () => {
    rl.close();
    runApp();
  },
};

steps.start();
