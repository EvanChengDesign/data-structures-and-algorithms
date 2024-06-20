class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMinValue(node) {
  if (node === null) {
    return null;
  }
  if (node.left !== null) {
    return findMinValue(node.left);
  }
  return node.value;
}

function testCases() {
  // Test Case 1: Simple BST
  console.log('Test Case 1: Simple BST');
  const root1 = new TreeNode(10);
  root1.left = new TreeNode(5);
  root1.right = new TreeNode(15);
  root1.left.left = new TreeNode(2);
  root1.left.right = new TreeNode(7);
  console.log('Minimum value in the BST is:', findMinValue(root1));
  console.log();

  // Test Case 2: Single Node Tree
  console.log('Test Case 2: Single Node Tree');
  const singleNode = new TreeNode(42);
  console.log('Minimum value in the BST is:', findMinValue(singleNode));
  console.log();

  // Test Case 3: Right Skewed Tree
  console.log('Test Case 3: Right Skewed Tree');
  const rightSkewed = new TreeNode(1);
  rightSkewed.right = new TreeNode(2);
  rightSkewed.right.right = new TreeNode(3);
  console.log('Minimum value in the BST is:', findMinValue(rightSkewed));
  console.log();

  // Test Case 4: Left Skewed Tree
  console.log('Test Case 4: Left Skewed Tree');
  const leftSkewed = new TreeNode(5);
  leftSkewed.left = new TreeNode(3);
  leftSkewed.left.left = new TreeNode(1);
  console.log('Minimum value in the BST is:', findMinValue(leftSkewed));
  console.log();

  // Test Case 5: Empty Tree
  console.log('Test Case 5: Empty Tree');
  console.log('Minimum value in the BST is:', findMinValue(null));
  console.log();

  // Test Case 6: Tree with Negative Values
  console.log('Test Case 6: Tree with Negative Values');
  const negativeTree = new TreeNode(-10);
  negativeTree.left = new TreeNode(-20);
  negativeTree.right = new TreeNode(-5);
  negativeTree.left.left = new TreeNode(-30);
  console.log('Minimum value in the BST is:', findMinValue(negativeTree));
  console.log();

  // Test Case 7: Tree with Duplicates
  console.log('Test Case 7: Tree with Duplicates');
  const duplicateTree = new TreeNode(10);
  duplicateTree.left = new TreeNode(5);
  duplicateTree.right = new TreeNode(15);
  duplicateTree.left.left = new TreeNode(5);
  console.log('Minimum value in the BST is:', findMinValue(duplicateTree));
  console.log();
}

// Run test cases
testCases();
