// config inicial
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise((resolve) => rl.question(str, resolve));

let nums;
let alvo;

// lógica aplicada
const runApp = () => {
  let i = 1;
  let startIndex = 0;

  for (;;) {
    const result = nums[startIndex] + nums[i];

    if (result === alvo) {
      console.log([startIndex, i]);
      break;
    }

    if (i < nums.length - 1) {
      i += 1;
    } else if (startIndex < nums.length - 1) {
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
      steps.alvo();
    }
  },
  alvo: async () => {
    const data = await question('Insira o alvo - deve ser um número inteiro (Ex.: 9): ');
    alvo = JSON.parse(data);

    if (!Number.isInteger(alvo)) {
      console.error('Alvo informado não é inteiro. Tente novamente. Ex.: 9');
      steps.alvo();
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
