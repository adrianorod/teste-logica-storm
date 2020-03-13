// config inicial
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise((resolve) => rl.question(str, resolve));

const bracketTypes = [
  {
    open: '(',
    close: ')',
  },
  {
    open: '{',
    close: '}',
  },
  {
    open: '[',
    close: ']',
  },
];

let brackets;

// lógica aplicada
const getBracketType = (bracket) => bracketTypes.find((item) => item.close === bracket);

const runApp = () => {
  let state = true;
  let correspondingIndex = -1;

  for (let i = 0; i < brackets.length; i += 1) {
    const bracketType = getBracketType(brackets[i]);

    if (bracketType) {
      correspondingIndex += 2;
      state = bracketType.open === brackets[i - correspondingIndex];
    }

    if (!state) break;
  }

  console.log(`Está balanceado? ${state ? 'SIM' : 'NAO'}.`);
};

// perguntas para obter dados dinamicos
const steps = {
  start: async () => {
    console.log(`Questão 02 - Dado sequencias de caracteres, determine se cada sequência de brackets
    é balanceada.\n`);
    steps.brackets();
  },
  brackets: async () => {
    const data = await question('Insira uma sequencia de brackets. Ex: {[()]}: ');
    brackets = data.match(/.{1}/g);
    steps.end();
  },
  end: async () => {
    rl.close();
    runApp();
  },
};

steps.start();
