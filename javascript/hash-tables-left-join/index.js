// Function to perform a LEFT JOIN on two hashmaps
function leftJoin(hashMap1, hashMap2) {
  // Create a new array to hold the result
  const result = [];

  // Iterate over the keys in the first hashmap
  for (const key in hashMap1) {
    if (hashMap1.hasOwnProperty(key)) {
      // Get the synonym from the first hashmap
      const synonym = hashMap1[key];
      // Get the antonym from the second hashmap, or NULL if it doesn't exist
      const antonym = hashMap2.hasOwnProperty(key) ? hashMap2[key] : null;
      // Push the result array with key, synonym, and antonym
      result.push([key, synonym, antonym]);
    }
  }

  return result;
}

module.exports = leftJoin;
