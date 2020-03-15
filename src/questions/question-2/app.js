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

const getBracketType = (bracket) => bracketTypes.find((item) => item.close === bracket);

const runApp = (stringBrackets) => {
  let state = true;
  let correspondingIndex = -1;
  const brackets = stringBrackets.match(/.{1}/g);

  for (let i = 0; i < brackets.length; i += 1) {
    const bracketCloseType = getBracketType(brackets[i]);

    if (bracketCloseType) {
      correspondingIndex += 2;
      state = bracketCloseType.open === brackets[i - correspondingIndex];
    }

    if (!state) break;
  }

  return state;
};

module.exports = runApp;
