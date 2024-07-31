const calculate = () => {
    const value = document.querySelector("#numbers").value.split();
    const array = value.split(/,\s*/g);
    const numbers = array.map(item => Number(item)).filter(item => !isNaN(item));
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;
};

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    const isEven = array.length % 2 === 0;
    const oddListMedian = array[Math.floor(array.length / 2)];
    const evenMiddles = () => [array[array.length / 2], array[(array.length / 2) - 1]];
    const evenListMedian = getMean(evenMiddles);
};