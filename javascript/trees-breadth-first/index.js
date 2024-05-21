// breadthFirst.js
function breadthFirst(tree) {
  const result = [];
  if (!tree) {
    return result;
  }
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}

module.exports = breadthFirst;
