const { BinaryTree, Node } = require('../index');

describe('BinaryTree findMaximumValue', () => {
  test('should return the maximum value in the tree with multiple nodes', () => {
    const tree = new BinaryTree(new Node(10, new Node(20), new Node(30)));
    expect(tree.findMaximumValue()).toBe(30);
  });

  test('should return the maximum value in the tree with negative values', () => {
    const tree = new BinaryTree(new Node(-10, new Node(-20), new Node(-30)));
    expect(tree.findMaximumValue()).toBe(-10);
  });

  test('should return the value of the single node in the tree', () => {
    const tree = new BinaryTree(new Node(5));
    expect(tree.findMaximumValue()).toBe(5);
  });

  test('should return -Infinity for an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.findMaximumValue()).toBe(-Infinity); // or handle as preferred
  });

  test('should handle a tree with mixed positive and negative values', () => {
    const tree = new BinaryTree(new Node(0, new Node(-1), new Node(1)));
    expect(tree.findMaximumValue()).toBe(1);
  });

  test('should handle a tree with duplicate values', () => {
    const tree = new BinaryTree(new Node(10, new Node(10), new Node(10)));
    expect(tree.findMaximumValue()).toBe(10);
  });
});
