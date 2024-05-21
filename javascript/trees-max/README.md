# Code Challenge Class 16

![Whiteboard](./uml.png)

Find the Maximum Value in a Binary Tree

Algorithm:

Initialize a variable maxValue to -Infinity.
Define a helper function findMax(node) that takes a node as an argument.
If the node is null, return.
Update maxValue to be the maximum of maxValue and node.value.
Recursively call findMax on the left child of the node.
Recursively call findMax on the right child of the node.
Call the helper function findMax with the root of the tree.
Return maxValue.
Time Complexity: O(n), where n is the number of nodes in the tree. This is because each node is visited exactly once.

Space Complexity: O(h), where h is the height of the tree. This is due to the recursion stack.

Input/Output
Input: A binary tree.

Output: The maximum value stored in the tree.

Test/Edge Cases:

Normal Case: A tree with multiple nodes with varying values.

Single Node: A tree with only one node.

All Negative Values: A tree where all values are negative.

Empty Tree: A tree with no nodes (should handle gracefully).

Summary:

Time Complexity (O(n)): The algorithm traverses each of the n nodes exactly once, resulting in a linear time complexity.

Space Complexity (O(h)): The algorithm’s space usage is determined by the height of the tree (h), which impacts the depth of the recursion stack. In the worst case, the height h can be equal to the number of nodes (n), but in a balanced tree, h is approximately log(n).
