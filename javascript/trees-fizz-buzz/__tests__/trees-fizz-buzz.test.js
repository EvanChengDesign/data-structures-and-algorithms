const { Node, KaryTree, fizzBuzzTree } = require('../index');

describe('FizzBuzz Tree', () => {
  it('should return a new tree with FizzBuzz transformation', () => {
    const tree = new KaryTree(3);
    tree.root = new Node(15);
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(5));
    tree.root.children.push(new Node(7));

    const newTree = fizzBuzzTree(tree);

    expect(newTree.root.value).toBe('FizzBuzz');
    expect(newTree.root.children[0].value).toBe('Fizz');
    expect(newTree.root.children[1].value).toBe('Buzz');
    expect(newTree.root.children[2].value).toBe('7');
  });

  it('should handle an empty tree', () => {
    const tree = new KaryTree(3);
    const newTree = fizzBuzzTree(tree);
    expect(newTree).toBeNull();
  });
});

