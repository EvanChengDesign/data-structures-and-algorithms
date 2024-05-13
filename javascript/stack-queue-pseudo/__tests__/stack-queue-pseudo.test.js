const { PseudoQueue } = require('../index');

// Jest tests
describe('PseudoQueue', () => {
  let pq;

  beforeEach(() => {
    pq = new PseudoQueue();
  });

  test('should instantiate an empty PseudoQueue', () => {
    expect(pq.stack1.isEmpty()).toBe(true);
    expect(pq.stack2.isEmpty()).toBe(true);
  });

  test('should enqueue elements into the PseudoQueue', () => {
    pq.enqueue(10);
    pq.enqueue(20);
    pq.enqueue(30);
    expect(pq.stack1.items).toEqual([10, 20, 30]);
  });

  test('should dequeue elements from the PseudoQueue in FIFO order', () => {
    pq.enqueue(10);
    pq.enqueue(20);
    pq.enqueue(30);
    expect(pq.dequeue()).toBe(10);
    expect(pq.dequeue()).toBe(20);
    expect(pq.dequeue()).toBe(30);
  });

  test('should return null when dequeuing from an empty PseudoQueue', () => {
    expect(pq.dequeue()).toBe(null);
  });

  test('should handle mixed enqueue and dequeue operations correctly', () => {
    pq.enqueue(1);
    pq.enqueue(2);
    expect(pq.dequeue()).toBe(1);
    pq.enqueue(3);
    expect(pq.dequeue()).toBe(2);
    pq.enqueue(4);
    pq.enqueue(5);
    expect(pq.dequeue()).toBe(3);
    expect(pq.dequeue()).toBe(4);
    expect(pq.dequeue()).toBe(5);
  });
});
