class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isValuePresent(head, target) {
  // Base case: if the list is empty
  if (head === null) {
    return false;
  }
  // Check if the current node's value equals the target value
  if (head.value === target) {
    return true;
  }
  // Recursive step: call the function with the next node
  return isValuePresent(head.next, target);
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

// Test Cases
const list1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(isValuePresent(list1, 3)); // Output: true
console.log(isValuePresent(list1, 6)); // Output: false

const list2 = createLinkedList([]);
console.log(isValuePresent(list2, 1)); // Output: false

const list3 = createLinkedList([10]);
console.log(isValuePresent(list3, 10)); // Output: true
console.log(isValuePresent(list3, 1)); // Output: false

const list4 = createLinkedList([5, 9, 12, 20]);
console.log(isValuePresent(list4, 20)); // Output: true
console.log(isValuePresent(list4, 9)); // Output: true
console.log(isValuePresent(list4, 0)); // Output: false
