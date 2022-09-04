import LinkedList from '../LinkedLists/LinkedList';

export default class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.start === null;
  }
  enqueue(item) {
    this.list.append(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const returnValue = this.list.start.item;
    this.list.deleteItem(returnValue);
    return returnValue;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.start.item;
  }

  toString() {
    return this.list.toString();
  }
}
