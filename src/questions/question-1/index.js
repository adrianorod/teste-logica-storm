// config inicial
const { rl, question } = require('../../utils');

let nums;
let target;

// lógica aplicada
const runApp = (arr, tg) => {
  let i = 1;
  let startIndex = 0;

  for (;;) {
    const result = arr[startIndex] + arr[i];

    if (result === tg) {
      console.log([startIndex, i]);
      break;
    }

    if (i < arr.length - 1) {
      i += 1;
    } else if (startIndex < arr.length - 1) {
      startIndex += 1;
      i = startIndex + 1;
    } else {
      console.log('Nenhum alvo foi encontrado.');
      break;
    }
  }
};

// perguntas para obter dados dinamicos
const steps = {
  start: async () => {
    console.log(`Questão 01 - Dado um array de números inteiros, retornaremos os índices de dois
    números de forma que eles se somem a um alvo específico.\n`);
    steps.array();
  },
  array: async () => {
    const data = await question('Insira o array de números inteiros desejado (Ex.: [2, 7, 11, 15]): ');
    nums = JSON.parse(data);

    if (!Array.isArray(nums)) {
      console.error(`Formato inesperado de array informado (${nums}). Tente novamente.`);
      steps.array();
    } else {
      steps.target();
    }
  },
  target: async () => {
    const data = await question('Insira o alvo - deve ser um número inteiro (Ex.: 9): ');
    target = JSON.parse(data);

    if (!Number.isInteger(target)) {
      console.error('Alvo informado não é inteiro. Tente novamente. Ex.: 9');
      steps.target();
    } else {
      steps.end();
    }
  },
  end: async () => {
    rl.close();
    runApp(nums, target);
  },
};

steps.start();
