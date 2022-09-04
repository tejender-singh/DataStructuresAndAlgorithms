import Stack from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.toString()).toBe('');
  });

  it('should push values', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(4);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.toString()).toBe('5,4');
  });

  it('should peek values', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(4);
    expect(stack.peek()).toBe(4);
    expect(stack.toString()).toBe('5,4');
  });

  it('should pop values', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.toString()).toBe('5');
  });

  it('should peek null if stack is empty', () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(null);
  });

  it('should pop null if stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });

});
