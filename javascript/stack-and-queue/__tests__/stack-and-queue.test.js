const { Stack, Queue } = require('../index');

describe('Stack Tests', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('New stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('Push adds a value to the top of the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('Pop removes and returns the top value', () => {
    stack.push(20);
    expect(stack.pop()).toBe(20);
  });

  test('Peek returns the top value without removing it', () => {
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.isEmpty()).toBe(false);
  });

  test('Pop from empty stack throws error', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('Peek from empty stack throws error', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('Queue Tests', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('New queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('Enqueue adds a value to the back of the queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  test('Dequeue removes and returns the front value', () => {
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(20);
  });

  test('Peek returns the front value without removing it', () => {
    queue.enqueue(30);
    expect(queue.peek()).toBe(30);
    expect(queue.isEmpty()).toBe(false);
  });

  test('Dequeue from empty queue throws error', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  test('Peek from empty queue throws error', () => {
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
