const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  rl,
  question: (str) => new Promise((resolve) => rl.question(str, resolve)),
};
