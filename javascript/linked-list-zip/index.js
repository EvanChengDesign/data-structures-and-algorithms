class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let mergeTwoLists = function(L1, L2) {
  let curr = new ListNode();
  const dummy = curr;
  while (L1 && L2) {
    if (L1.val < L2.val) {
      curr.next = L1;
      L1 = L1.next;
    } else {
      curr.next = L2;
      L2 = L2.next;
    }
    curr = curr.next;
  }
  if (L1) {
    curr.next = L1;
  }
  if (L2) {
    curr.next = L2;
  }
  return dummy.next;
};

module.exports = { ListNode, mergeTwoLists };
