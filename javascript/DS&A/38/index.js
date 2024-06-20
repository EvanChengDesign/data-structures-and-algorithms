function findLargestRecursive(stack) {
  // Base case: If the stack is empty, return null
  if (stack.length === 0) {
    return null;
  }

  // Pop the top element
  const top = stack.pop();

  // Recursive call to find the largest value in the remaining stack
  const largestInRest = findLargestRecursive(stack);

  // Push the top element back to restore the original stack
  stack.push(top);

  // Compare the popped element with the largest value in the rest of the stack
  if (largestInRest === null) {
    return top;
  } else {
    return Math.max(top, largestInRest);
  }
}

// Test cases
const testCases = [
  [1, 3, 5, 7, 2],
  [-3, -1, -7, -4],
  [42],
  [],
  [2, 3, 3, 1]
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}: `, findLargestRecursive([...testCase]));
});
