function insert(sorted, value) {
  let i = 0;
  while (i < sorted.length && value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  if (input.length === 0) return [];
  let sorted = [input[0]];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}

module.exports = insertionSort;
