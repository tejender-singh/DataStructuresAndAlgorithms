import Queue from '../Queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toString()).toBe('');
  });

  it('should enqueue values', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.toString()).toBe('5,4');
  });

  it('should peek values', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(5);
    expect(queue.toString()).toBe('5,4');
  });

  it('should dequeue values', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(5);
    expect(queue.toString()).toBe('4');
  });

  it('should peek null if queue is empty', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(null);
    expect(queue.toString()).toBe('');
  });

  it('should dequeue null if queue is empty', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
    expect(queue.toString()).toBe('');
  });
});
