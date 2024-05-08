const { mergeTwoLists, ListNode } = require('../index');

describe('Merge Two Lists Tests', () => {
  test('Merge two empty lists', () => {
    let list1 = null;
    let list2 = null;
    let mergedList = mergeTwoLists(list1, list2);
    expect(mergedList).toBeNull();
  });

  test('Merge one empty list and one non-empty list', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    let list2 = null;
    let mergedList = mergeTwoLists(list1, list2);
    let result = [];
    while (mergedList) {
      result.push(mergedList.val);
      mergedList = mergedList.next;
    }
    expect(result).toEqual([1, 3, 5]);
  });

  test('Merge two equal length lists', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    let list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);
    let mergedList = mergeTwoLists(list1, list2);
    let result = [];
    while (mergedList) {
      result.push(mergedList.val);
      mergedList = mergedList.next;
    }
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Merge two lists where the first list is longer', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    list1.next.next.next = new ListNode(7);
    let list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);
    let mergedList = mergeTwoLists(list1, list2);
    let result = [];
    while (mergedList) {
      result.push(mergedList.val);
      mergedList = mergedList.next;
    }
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('Merge two lists where the second list is longer', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    let list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);
    list2.next.next.next = new ListNode(8);
    let mergedList = mergeTwoLists(list1, list2);
    let result = [];
    while (mergedList) {
      result.push(mergedList.val);
      mergedList = mergedList.next;
    }
    expect(result).toEqual([1, 2, 3, 4, 6, 8]);
  });
});
