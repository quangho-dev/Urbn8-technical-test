const sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));

console.log(sum([5, 9, 6, 8, 4, 6]))