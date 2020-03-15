const runApp = (elevations) => {
  if (!Array.isArray(elevations)) return 0;

  let startBlock = -1;
  let waterValue = 0;
  let waterAccumulator = 0;

  for (let i = 0; i < elevations.length; i += 1) {
    const next = i + 1;

    if (startBlock < 0 && elevations[i] > elevations[next]) {
      startBlock = i;
    }

    if (startBlock >= 0 && elevations[startBlock] > elevations[next]) {
      waterAccumulator += elevations[startBlock] - elevations[next];
    } else {
      waterValue += (
        elevations[next + 1] || elevations[startBlock] === elevations[next]
          ? waterAccumulator
          : 0
      );
      i = !elevations[next + 1] && elevations[startBlock + 1] ? startBlock : i;
      waterAccumulator = 0;
      startBlock = -1;
    }
  }

  return waterValue;
};

module.exports = runApp;
