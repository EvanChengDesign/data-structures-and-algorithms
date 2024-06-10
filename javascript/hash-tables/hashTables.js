class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    if (!this.head) {
      this.head = new Node(key, value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(key, value);
    }
  }

  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  contains(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

class HashTable {
  constructor(size = 1024) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  hash(key) {
    let sum = 0;
    for (let char of key) {
      sum += char.charCodeAt(0);
    }
    const hashedKey = (sum * 599) % this.size;
    return hashedKey;
  }

  add(key, value) {
    const index = this.hash(key);
    if (this.buckets[index] === null) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].append(key, value);
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index] !== null) {
      return this.buckets[index].find(key);
    }
    return null;
  }

  contains(key) {
    const index = this.hash(key);
    if (this.buckets[index] !== null) {
      return this.buckets[index].contains(key);
    }
    return false;
  }
}

module.exports = { Node, LinkedList, HashTable };
