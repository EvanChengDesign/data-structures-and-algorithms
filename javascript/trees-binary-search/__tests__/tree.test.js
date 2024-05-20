'use strict';

const { Node } = require('../index.js');
const { BinaryTree } = require('../binary-tree.js');
const { BinarySearchTree } = require('../binary-search.js');

describe('Node class', () => {
  test('should create a node with the correct value', () => {
    const node = new Node(10);
    expect(node.value).toBe(10);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('BinaryTree class', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
  });

  test('preOrder traversal', () => {
    expect(tree.preOrder()).toEqual([10, 5, 15]);
  });

  test('inOrder traversal', () => {
    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });

  test('postOrder traversal', () => {
    expect(tree.postOrder()).toEqual([5, 15, 10]);
  });
});

describe('BinarySearchTree class', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('should add values correctly', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
    expect(bst.root.left.left.value).toBe(2);
    expect(bst.root.left.right.value).toBe(7);
  });

  test('should find values correctly', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(7)).toBe(false);
  });

  test('preOrder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);
    expect(bst.preOrder()).toEqual([10, 5, 2, 7, 15]);
  });

  test('inOrder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);
    expect(bst.inOrder()).toEqual([2, 5, 7, 10, 15]);
  });

  test('postOrder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);
    expect(bst.postOrder()).toEqual([2, 7, 5, 15, 10]);
  });
});
