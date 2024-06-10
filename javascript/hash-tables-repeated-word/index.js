function repeatedWords(str) {
  const words = str.split(/\s+/);
  const hashTable = {};

  for (let word of words) {
    word = word.toLowerCase(); // Normalize word to handle case insensitivity
    if (hashTable[word]) {
      return word;
    } else {
      hashTable[word] = 1;
    }
  }

  return null;
}

// Bonus: Modify to return a count of each word
function wordCount(str) {
  const words = str.split(/\s+/);
  const hashTable = {};

  for (let word of words) {
    word = word.toLowerCase();
    if (hashTable[word]) {
      hashTable[word]++;
    } else {
      hashTable[word] = 1;
    }
  }

  return hashTable;
}

// Bonus: Modify to return a list of the most frequently used words
function mostFrequentWords(str) {
  const words = str.split(/\s+/);
  const hashTable = {};

  for (let word of words) {
    word = word.toLowerCase();
    if (hashTable[word]) {
      hashTable[word]++;
    } else {
      hashTable[word] = 1;
    }
  }

  const maxCount = Math.max(...Object.values(hashTable));
  const mostFrequent = Object.keys(hashTable).filter(word => hashTable[word] === maxCount);

  return mostFrequent;
}

module.exports = {
  repeatedWords,
  wordCount,
  mostFrequentWords
};
