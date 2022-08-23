import DoublyLinkedListNode from './DoublyLinkedListNode.js';

export default class DoublyLinkedList {
  constructor() {
    this.start = new DoublyLinkedListNode(null, null, null);
  }

  append(item) {
    let currentNode = this.start;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new DoublyLinkedListNode(
      item,
      currentNode === this.start ? null : currentNode,
      null
    );
  }

  prepend(item) {
    let currentNode = new DoublyLinkedListNode(
      item,
      this.start,
      this.start.next
    );
    this.start.next.prev = currentNode;
    this.start.next = currentNode;
  }

  insert(item, index) {
    if (this.length() < index) {
      this.append(item);
    } else {
      let currentNode = this.start;
      let i = 0;
      while (i !== index) {
        i++;
        currentNode = currentNode.next;
      }
      let nextNode = currentNode.next;
      currentNode.next = new DoublyLinkedListNode(item, currentNode, nextNode);
      nextNode.prev = currentNode.next;
    }
  }

  print() {
    console.log('----------------');
    let currentNode = this.start.next;
    while (currentNode !== null) {
      const p = currentNode.prev ? currentNode.prev.item : null;
      const n = currentNode.next ? currentNode.next.item : null;
      console.log(currentNode.item, p, n);
      currentNode = currentNode.next;
    }
  }

  length() {
    let currentNode = this.start;
    let listLength = 0;
    while (currentNode.next !== null) {
      listLength++;
      currentNode = currentNode.next;
    }
    return listLength;
  }

  deleteItem(item) {
    let currentNode = this.start;
    while (currentNode.next !== null) {
      if (currentNode.next.item === item) {
        currentNode.next = currentNode.next.next;
        currentNode.next.prev = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  findIndex(item) {
    let currentNode = this.start.next;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.item === item) {
        break;
      }
      index++;
      currentNode = currentNode.next;
    }
    return index < this.length() ? index : -1;
  }

  toString() {
    let returnString = '';
    let currentNode = this.start.next;
    while (currentNode !== null) {
      returnString = returnString
        ? `${returnString},${currentNode.item.toString()}`
        : currentNode.item.toString();
      currentNode = currentNode.next;
    }
    return returnString;
  }
}

console.log('hello');
const a = new DoublyLinkedList();
a.append(5);
a.append(55);
a.insert(1, 1);
a.append(543);
a.append(52);
a.prepend(7);
a.prepend(6);
a.deleteItem(543);
a.print();
