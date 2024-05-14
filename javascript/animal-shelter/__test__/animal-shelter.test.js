const QueueUsingStacks = require('../index');

describe('QueueUsingStacks', () => {
  let queue;

  beforeEach(() => {
    queue = new QueueUsingStacks();
  });

  test('enqueue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.stack1).toEqual([1, 2, 3]);
  });

  test('dequeue elements in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeNull();
  });

  test('dequeue from an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('enqueue and dequeue with interleaving operations', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeNull();
  });
});
