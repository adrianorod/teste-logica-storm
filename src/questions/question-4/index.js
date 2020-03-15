const { rl, question } = require('../../utils');
const runApp = require('./app');

const steps = {
  start: async () => {
    console.log(`Questão 04 - Dados n inteiros não negativos representando um mapa de elevação
    onde a largura de cada barra é 1, calcularemos quanta água é capaz de reter após a chuva.\n`);
    steps.elevations();
  },
  elevations: async () => {
    const data = await question('Insira o array de números inteiros de elevações (Ex.: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]): ');
    const elevations = JSON.parse(data);

    if (!Array.isArray(elevations)) {
      console.error(`Formato inesperado de array informado (${elevations}). Tente novamente.`);
      steps.elevations();
    } else {
      steps.end(elevations);
    }
  },
  end: async (elevations) => {
    rl.close();
    const waterValue = runApp(elevations);
    console.log('Água retida: ', waterValue);
  },
};

steps.start();
