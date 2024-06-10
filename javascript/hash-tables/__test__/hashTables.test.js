const assert = require('assert');
const { HashTable } = require('../hashTables.js');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  describe('#add()', () => {
    it('should add key-value pairs to the hash table', () => {
      hashTable.add('name', 'Alice');
      hashTable.add('age', 25);
      hashTable.add('city', 'Wonderland');
      assert.strictEqual(hashTable.get('name'), 'Alice');
      assert.strictEqual(hashTable.get('age'), 25);
      assert.strictEqual(hashTable.get('city'), 'Wonderland');
    });
  });

  describe('#get()', () => {
    it('should retrieve the correct value for a given key', () => {
      hashTable.add('name', 'Alice');
      assert.strictEqual(hashTable.get('name'), 'Alice');
    });

    it('should return null if the key does not exist', () => {
      assert.strictEqual(hashTable.get('nonexistent'), null);
    });
  });

  describe('#contains()', () => {
    it('should return true if the key exists in the table', () => {
      hashTable.add('name', 'Alice');
      assert.strictEqual(hashTable.contains('name'), true);
    });

    it('should return false if the key does not exist in the table', () => {
      assert.strictEqual(hashTable.contains('nonexistent'), false);
    });
  });

  describe('#hash()', () => {
    it('should return a number that is within the size of the table', () => {
      const index = hashTable.hash('test');
      assert.strictEqual(index >= 0 && index < hashTable.size, true);
    });

    it('should return consistent hash results for the same key', () => {
      const index1 = hashTable.hash('test');
      const index2 = hashTable.hash('test');
      assert.strictEqual(index1, index2);
    });
  });

  describe('Handling Collisions', () => {
    it('should handle collisions by chaining', () => {
      const smallHashTable = new HashTable(1); // Force collisions
      smallHashTable.add('name', 'Alice');
      smallHashTable.add('eman', 'Bob'); // 'name' and 'eman' will collide
      assert.strictEqual(smallHashTable.get('name'), 'Alice');
      assert.strictEqual(smallHashTable.get('eman'), 'Bob');
      assert.strictEqual(smallHashTable.contains('name'), true);
      assert.strictEqual(smallHashTable.contains('eman'), true);
    });
  });
});
