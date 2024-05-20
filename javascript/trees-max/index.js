class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMaximumValue() {
    let maxValue = -Infinity;

    const findMax = (node) => {
      if (!node) return;

      maxValue = Math.max(maxValue, node.value);
      findMax(node.left);
      findMax(node.right);
    };

    findMax(this.root);
    return maxValue;
  }
}

module.exports = { BinaryTree, Node };
