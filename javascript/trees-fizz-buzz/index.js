class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) return null;

  const fizzBuzz = (value) => {
    if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
    if (value % 3 === 0) return "Fizz";
    if (value % 5 === 0) return "Buzz";
    return value.toString();
  };

  const newTree = new KaryTree(tree.k);
  const traverse = (node) => {
    if (!node) return null;
    const newNode = new Node(fizzBuzz(node.value));
    for (let child of node.children) {
      newNode.children.push(traverse(child));
    }
    return newNode;
  };

  newTree.root = traverse(tree.root);
  return newTree;
}

module.exports = { Node, KaryTree, fizzBuzzTree };

