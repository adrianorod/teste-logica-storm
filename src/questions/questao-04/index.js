// config inicial
const { rl, question } = require('../../utils');

// lógica aplicada
const runApp = (elevations) => {
  let startBlock = -1;
  let waterValue = 0;
  let waterAccumulator = 0;

  for (let i = 0; i < elevations.length; i += 1) {
    const next = i + 1;

    if (startBlock < 0 && elevations[i] > elevations[next]) {
      startBlock = i;
    }

    if (startBlock >= 0 && elevations[startBlock] > elevations[next]) {
      waterAccumulator += elevations[startBlock] - elevations[next];
    } else {
      waterValue += (
        elevations[next + 1] || elevations[startBlock] === elevations[next]
          ? waterAccumulator
          : 0
      );
      i = !elevations[next + 1] && elevations[startBlock + 1] ? startBlock : i;
      waterAccumulator = 0;
      startBlock = -1;
    }
  }

  console.log('Água retida: ', waterValue);
};

// perguntas para obter dados dinamicos
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
    runApp(elevations);
  },
};

steps.start();
