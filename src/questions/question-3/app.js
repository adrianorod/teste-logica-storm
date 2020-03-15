const runApp = (actions) => {
  if (!Array.isArray(actions)) return 0;

  let i = 0;
  let maxProfit = 0;
  let startIndex = 0;
  const limiter = actions.length - 1;

  while (i < limiter) {
    const profit = actions[i] - actions[startIndex];

    if (profit > maxProfit) maxProfit = profit;

    i += 1;

    if (i === limiter && startIndex < limiter) {
      startIndex += 1;
      i = startIndex + 1;
    }
  }

  return maxProfit;
};

module.exports = runApp;
