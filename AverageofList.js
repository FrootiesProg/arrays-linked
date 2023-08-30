// Given values
const values = [2, 3, 1, 1, 7, 6, 9];

// Calculate the sum of all values
const sum = values.reduce((acc, val) => acc + val, 0);

// Calculate the average
const averageValue = sum / values.length;

console.log("Average:", averageValue);