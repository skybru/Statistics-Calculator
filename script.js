const calculate = () => {
    const value = document.querySelector("#numbers").value.split();
    const array = value.split(/,\s*/g);
    const numbers = array.map(item => Number(item)).filter(item => !isNaN(item));
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;

    const median = getMedian(numbers);
    document.querySelector("#median").textContent = median;

    const mode = getMode(numbers);
    document.querySelector("#mode").textContent = mode;

    const range = getRange(numbers);
    document.querySelector("#range").textContent = range;

    const variance = getVariance(numbers);
    document.querySelector("#variance").textContent = variance;
};

//media
const getMean = (array) => array.reduce((acc, item) => acc + el, 0) / array.length;

//mediana
const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
      return getMean([sorted[(sorted.length / 2) - 1], sorted[sorted.length / 2]]);
    } else {
      return sorted[Math.floor(sorted.length / 2)];
    }
};

//moda
const getMode = (array) => {
    const counts = {};
    array.forEach(item => {
      if (counts[item]) {
        counts[item] += 1;
      } else {
        counts[item] = 1;
      }
    });

    if (new Set(Object.values(counts)).size === 1) {
      return null;
    }

    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter(item => counts[item] === counts[highest]);

    return mode.join(", ");
};

//intervallo fra valore max e min
const getRange = (array) => (Math.max(...array) - Math.min(...array));

//The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are. The variance is calculated in a few steps.
const getVariance = (array) => {
  const mean = getMean(array);
  const differences = array.map(item => item - mean);
  const squaredDifferences = differences.map(item => item ** 2);
  const sumSquaredDifferences = squaredDifferences.reduce((acc, item) => acc + item, 0);

  const variance = array.reduce((acc, item) => {
    const difference = item - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  
  return variance;
};

