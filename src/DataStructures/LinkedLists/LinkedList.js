import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  start = null;
  end = null;

  constructor() {
  }

  append(item) {
    if(this.start === null){
      this.start = new LinkedListNode(item, null);
      this.end = this.start;
    }
    else{
      let tempNode = this.start;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new LinkedListNode(item, null);  
      this.end = tempNode.next;
    }
  }

  insert(item, index) {
    const length = this.length();
    if (length <= index) {
      this.append(item);
    } else {
      let currentNode = this.start;
      let i = 0;
      if(index===0){
        currentNode = new LinkedListNode(item, this.start);
        this.start = currentNode;
      } else{
        let prevNode;
        while (i !== index) {
          i++;
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        prevNode.next = new LinkedListNode(item, currentNode);  
      }
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
    while (tempNode !== null) {
      listLength++;
      tempNode = tempNode.next;
    }
    return listLength;
  }

  deleteItem(item) {
    let currentNode = this.start;
    let prevNode = this.start;
    while (currentNode !== null) {
      if (currentNode.item === item) {
        if(currentNode === this.start){
          this.start = this.start.next;
        } else {
          prevNode.next = currentNode.next;
        }
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  findIndex(item) {
    let currentNode = this.start;
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

  reverse() {
    let currNode = this.start;
    this.end = this.start;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.start = prevNode;
  }

  toString() {
    let returnString = '';
    let tempNode = this.start;
    while (tempNode !== null) {
      returnString = returnString
        ? `${returnString},${tempNode.item.toString()}`
        : tempNode.item.toString();
      tempNode = tempNode.next;
    }
    return returnString;
  }

  getItemAtIndex(index){
    if (this.length() < index) {
      return null;
    } else {
      let currentNode = this.start;
      let i = 0;
      while (i !== index) {
        i++;
        currentNode = currentNode.next;
      }
      return currentNode.item;
    }
  }


  deleteItemAtIndex(index){
    const listLength = this.length();
    if (listLength < index) {
      return null;
    } else {
      let currentNode = this.start;
      let prevNode;
      let i = 0;
      while (i !== index) {
        i++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      const item = currentNode.item;
      if(i===0){
        this.start = this.start.next;
        return item;
      } else {
        prevNode.next = currentNode.next;
        if(i===listLength-1){
          this.end = prevNode;
        }
        return item;  
      }
    }
  }
}
