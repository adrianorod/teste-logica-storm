const runApp = (arr, tg) => {
  let i = 1;
  let startIndex = 0;

  for (;;) {
    const result = arr[startIndex] + arr[i];

    if (result === tg) {
      return [startIndex, i];
    }

    if (i < arr.length - 1) {
      i += 1;
    } else if (startIndex < arr.length - 1) {
      startIndex += 1;
      i = startIndex + 1;
    } else {
      return 0;
    }
  }
};

module.exports = runApp;
