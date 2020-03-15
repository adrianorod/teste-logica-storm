// config inicial
const { rl, question } = require('../../utils');

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
    const bracketCloseType = getBracketType(brackets[i]);

    if (bracketCloseType) {
      correspondingIndex += 2;
      state = bracketCloseType.open === brackets[i - correspondingIndex];
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
