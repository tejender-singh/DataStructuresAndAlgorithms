import DoublyLinkedListNode from './DoublyLinkedListNode.js';

export default class DoublyLinkedList {
  constructor() {
    this.start = new DoublyLinkedListNode(null, null, null);
  }

  append(item) {
    let tempNode = this.start;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new DoublyLinkedListNode(item, tempNode===this.start ? null : tempNode, null);
  }

  prepend(item) {
    let tempNode = new DoublyLinkedListNode(item, this.start, this.start.next);
    this.start.next.prev = tempNode;
    this.start.next = tempNode;
  }

  insert(item, index) {
    if (this.length() < index) {
      console.log('appending');
      this.append(item);
    } else {
      console.log('inserting');
      let tempNode = this.start;
      let i = 0;
      while (i !== index) {
        i++;
        tempNode = tempNode.next;
      }
      let nextNode = tempNode.next;
      tempNode.next = new DoublyLinkedListNode(item, tempNode, nextNode);
      nextNode.prev = tempNode.next;
    }
  }

  print() {
    console.log('----------------');
    let tempNode = this.start.next;
    while (tempNode !== null) {
      const p = tempNode.prev? tempNode.prev.item : null;
      const n = tempNode.next? tempNode.next.item : null;
      console.log(tempNode.item, p, n);
      tempNode = tempNode.next;
    }
  }

  length() {
    let tempNode = this.start;
    let listLength = 0;
    while (tempNode.next !== null) {
      listLength++;
      tempNode = tempNode.next;
    }
    return listLength;
  }

  deleteItem(item) {
    let tempNode = this.start;
    while (tempNode.next !== null) {
      if (tempNode.next.item === item) {
        tempNode.next = tempNode.next.next;
        tempNode.next.prev = tempNode;
        break;
      }
      tempNode = tempNode.next;
    }
  }

  findIndex(item) {
    let tempNode = this.start.next;
    let index = 0;
    while (tempNode !== null) {
      if (tempNode.item === item) {
        break;
      }
      index++;
      tempNode = tempNode.next;
    }
    return index < this.length() ? index : -1;
  }

  toString() {
    let returnString = '';
    let tempNode = this.start.next;
    while (tempNode !== null) {
      returnString = returnString
        ? `${returnString},${tempNode.item.toString()}`
        : tempNode.item.toString();
      tempNode = tempNode.next;
    }
    return returnString;
  }
}

console.log('hello');
const a = new DoublyLinkedList();
a.append(5);
a.append(55);
a.insert(1,1);
a.append(543);
a.append(52);
a.prepend(7);
a.prepend(6);
a.deleteItem(543);
a.print();
