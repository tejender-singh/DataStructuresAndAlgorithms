import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.start = new LinkedListNode(null, null);
  }

  append(item) {
    let tempNode = this.start;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new LinkedListNode(item, null);
  }

  insert(item, index) {
    if (this.length() < index) {
      this.append(item);
    } else {
      let tempNode = this.start;
      let i = 0;
      while (i !== index) {
        i++;
        tempNode = tempNode.next;
      }
      let nextNode = tempNode.next;
      tempNode.next = new LinkedListNode(item, nextNode);
    }
  }

  print() {
    console.log('----------------');
    let tempNode = this.start.next;
    while (tempNode !== null) {
      console.log(tempNode.item);
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

  reverse() {
    let currNode = this.start.next;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.start.next = prevNode;
  }

  toString() {
    let returnString = '';
    let tempNode = this.start.next;
    while (tempNode !== null) {
      //   console.log(tempNode.item);
      returnString = returnString
        ? `${returnString},${tempNode.item.toString()}`
        : tempNode.item.toString();
      tempNode = tempNode.next;
    }
    return returnString;
  }
}
