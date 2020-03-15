const { fork } = require('child_process');
const { rl, question } = require('./utils');

const questionOptions = [1, 2, 3, 4];

const steps = {
  start: async () => {
    console.log('================================================================================');
    console.log(`Temos 4 questões para avaliar a capacidade de análise e resolução de problemas
    através de algoritimos.`);
    console.log('================================================================================');
    steps.question();
  },
  question: async () => {
    const data = await question('Digite um número de 1 a 4, correspondente a questão que deseja executar: ');
    const questionNumber = JSON.parse(data);
    const hasQuestion = questionOptions.find((item) => item === questionNumber);

    if (!hasQuestion) {
      console.error('Questão informada não existe, tente novamente.');
      steps.question();
    } else {
      steps.end(questionNumber);
    }
  },
  end: async (questionNumber) => {
    console.log('================================================================================');
    rl.close();
    fork(`src/questions/question-${questionNumber}/index.js`);
  },
};

steps.start();
