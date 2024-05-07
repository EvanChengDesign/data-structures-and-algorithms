class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
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

  insertBefore(target, value) {
    let newNode = new Node(value);
    if (!this.head) return;
    if (this.head.value === target) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== target) {
      current = current.next;
    }
    if (current.next) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(target, value) {
    let newNode = new Node(value);
    let current = this.head;
    while (current && current.value !== target) {
      current = current.next;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }
}

module.exports = LinkedList; // This line exports the LinkedList class
