'use strict';

const { Node } = require ('./index.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    function traverse(node) {
      if (node === null) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

module.exports = { BinaryTree };

