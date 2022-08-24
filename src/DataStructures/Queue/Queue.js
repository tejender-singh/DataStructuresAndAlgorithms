import LinkedList from '../LinkedLists/LinkedList';

export default class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.start.next === null;
  }
  enqueue(item) {
    this.list.append(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const returnValue = this.list.start.next.item;
    this.list.deleteItem(returnValue);
    return returnValue;
  }

  peak() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.start.next.item;
  }

  toString() {
    return this.list.toString();
  }
}
