// Dado um array de números inteiros, retorne os índices dos
// dois números de forma que eles se somem a um alvo
// específico.

// Você pode assumir que cada entrada teria exatamente uma
// solução, e você não pode usar o mesmo elemento duas
// vezes.

// EXEMPLO

// Dado nums = [2, 7, 11, 15], alvo = 9,
// Como nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const nums = [2, 7, 11, 15];
const alvo = 9;
let i = 1;
// let startIndex = 0;

for (;;) {
  const result = nums[startIndex] + nums[i];

  if (result === alvo) {
    console.log([startIndex, i]);
    break;
  }

  if (nums.length > i + 1) {
    i += 1;
  }
}
