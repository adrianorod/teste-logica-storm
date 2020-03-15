const { rl, question } = require('../../utils');
const runApp = require('./app');

const steps = {
  start: async () => {
    console.log(`Questão 02 - Dado sequencias de caracteres, determine se cada sequência de brackets
    é balanceada.\n`);
    steps.brackets();
  },
  brackets: async () => {
    const data = await question('Insira uma sequencia de brackets. Ex: {[()]}: ');
    steps.end(data);
  },
  end: async (data) => {
    rl.close();
    const result = runApp(data);
    console.log(`Está balanceado? ${result ? 'SIM' : 'NAO'}.`);
  },
};

steps.start();
