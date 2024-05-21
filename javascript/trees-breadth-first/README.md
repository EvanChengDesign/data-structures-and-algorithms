# Code Challenge Class 17

### Problem Domain:

1. Write a function called breadth first.
2. Arguments: tree
3. Return: list of all values in the tree, in the order they were encountered.

![Whiteboard](./uml.png)

### Time/Space Complexity:

#### Time Complexity:
The time complexity of the breadthFirst function is O(n), where n is the number of nodes in the tree. This is because the function visits each node exactly once during the traversal. Each operation (enqueue, dequeue, and adding a node's value to the result list) takes constant time O(1), and since there are n nodes, the overall time complexity is O(n).

#### Space Complexity:
The space complexity of the breadthFirst function is O(n). This is determined by the space needed to store the queue and the result list.

Queue: In the worst case, the queue will store all the nodes at the deepest level of the tree. For a balanced binary tree, this would be at most half of the nodes at any point, but in the worst-case scenario (such as a completely unbalanced tree), it could store up to n nodes.

Result list: The result list will store all n nodes' values.
Thus, the overall space complexity is O(n) due to the storage requirements for the queue and the result list.
