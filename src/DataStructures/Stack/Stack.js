import LinkedList from '../LinkedLists/LinkedList.js';

export default class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.start === null;
  }

  push(item) {
    this.list.append(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const lastIndex = this.list.length() - 1;
    const returnValue = this.list.getItemAtIndex(lastIndex);
    this.list.deleteItemAtIndex(lastIndex);
    return returnValue;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    const lastIndex = this.list.length() - 1;
    const returnValue = this.list.getItemAtIndex(lastIndex);
    return returnValue;
  }

  toString() {
    return this.list.toString();
  }
}
