import LinkedList from '../LinkedLists/LinkedList.js';

export default class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.start.next === null;
  }

  push(item) {
    this.list.append(item);
  }

  pop() {
    if(this.isEmpty()){
        return null;
    }
    let currentNode = this.list.start;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    const returnValue = currentNode.next.item;
    currentNode.next = null;
    return returnValue;
  }

  peak() {
    if(this.isEmpty()){
        return null;
    }
    let currentNode = this.list.start;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.next.item;
  }

  toString() {
    return this.list.toString();
  }
}
const s = new Stack();
s.push(5);
s.push(4);
s.push(3);
s.pop();
s.pop();
s.pop();
console.log(s.toString());
console.log(s.peak());
console.log(s.toString());
console.log(s.pop());
console.log(s.toString());
