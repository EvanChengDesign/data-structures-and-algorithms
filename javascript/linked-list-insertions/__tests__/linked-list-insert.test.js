const LinkedList = require('../index'); // Make sure the path is correct

describe('LinkedList Insertion Tests', () => {
  test('Append nodes to an empty list', () => {
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.head.value).toBe(1);
    ll.append(2);
    expect(ll.head.next.value).toBe(2);
  });

  test('Insert node before a node in the middle of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.insertBefore(3, 5);
    expect(ll.head.next.value).toBe(5);
  });

  test('Insert node before the first node of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.insertBefore(1, 0);
    expect(ll.head.value).toBe(0);
  });

  test('Insert node after a node in the middle of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(2, 5);
    expect(ll.head.next.next.value).toBe(5);
  });

  test('Insert node after the last node of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.insertAfter(2, 3);
    expect(ll.head.next.next.value).toBe(3);
  });
});
