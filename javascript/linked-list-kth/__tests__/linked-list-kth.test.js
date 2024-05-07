const LinkedList = require('../index');

describe('LinkedList kthFromEnd Tests', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
  });

  test('k greater than length of the linked list throws an error', () => {
    expect(() => list.findKthFromEnd(5)).toThrow('k is greater than the length of the linked list');
  });

  test('k equal to the length of the linked list throws an error', () => {
    expect(() => list.findKthFromEnd(4)).toThrow('k is greater than the length of the linked list');
  });

  test('k is zero returns last element', () => {
    expect(list.findKthFromEnd(0)).toBe(2);
  });

  test('k is one returns second last element', () => {
    expect(list.findKthFromEnd(1)).toBe(8);
  });

  test('k is two returns third last element', () => {
    expect(list.findKthFromEnd(2)).toBe(3);
  });
});

