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

