class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findKthFromEnd(k) {
    if (k < 0) {
      throw new Error('k must be a non-negative integer');
    }
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i <= k; i++) { // Notice `<=` to handle `k` exactly equal to list length
      if (!fast) {
        throw new Error('k is greater than the length of the linked list');
      }
      fast = fast.next;
    }

    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow.value;
  }
}

module.exports = LinkedList;
