// breadthFirst.test.js
const breadthFirst = require('../index');

describe('breadthFirst', () => {
  test('returns values in breadth-first order for a given tree', () => {
    const tree = {
      value: 2,
      left: {
        value: 7,
        left: { value: 2, left: null, right: null },
        right: { value: 6, left: { value: 5, left: null, right: null }, right: { value: 11, left: null, right: null } }
      },
      right: {
        value: 5,
        left: null,
        right: { value: 9, left: { value: 4, left: null, right: null }, right: null }
      }
    };

    const result = breadthFirst(tree);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  test('returns an empty array for an empty tree', () => {
    const tree = null;
    const result = breadthFirst(tree);
    expect(result).toEqual([]);
  });

  test('handles a tree with only one node', () => {
    const tree = { value: 1, left: null, right: null };
    const result = breadthFirst(tree);
    expect(result).toEqual([1]);
  });

  test('handles a tree with only left children', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    };
    const result = breadthFirst(tree);
    expect(result).toEqual([1, 2, 3]);
  });

  test('handles a tree with only right children', () => {
    const tree = {
      value: 1,
      left: null,
      right: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null
        }
      }
    };
    const result = breadthFirst(tree);
    expect(result).toEqual([1, 2, 3]);
  });
});
