import LinkedList from '../LinkedLists/LinkedList';

export default class HashTable {
  defaultSize = 32;
  lists = null;
  keys = null;

  constructor(size) {
    if(!size){
      size = this.defaultSize;
    }
    this.lists = Array(size)
      .fill(null)
      .map(() => new LinkedList());
      this.keys = [];
  }

  hash(key) {
    return key % this.lists.length;
  }

  put(key, value){
    const hashValue = this.hash(key);
    const linkedList = this.lists[hashValue];
    let keyExists = false;
    let currentNode = linkedList.start;
    while(currentNode!==null){
      if(currentNode.item.key === key){
        currentNode.item.value = value;
        keyExists = true;
        break;
      } 
      currentNode = currentNode.next;
    }
    if(!keyExists){
      this.keys.push(key);
      linkedList.append({key, value});
    }
}

  get(key){
    const hashValue = this.hash(key);
    const linkedList = this.lists[hashValue];
    let currentNode = linkedList.start;
    while(currentNode!==null){
      if(currentNode.item.key === key){
        return currentNode.item.value;
      } 
      currentNode = currentNode.next;
    }
    return null;
  }

  delete(key) {
    const hashValue = this.hash(key);
    const linkedList = this.lists[hashValue];
    let currentNode = linkedList.start;
    let previousNode = currentNode;
    while(currentNode!==null){
      if(currentNode.item.key === key){
        this.keys.splice(this.keys.indexOf(key), 1);
        if(currentNode === linkedList.start){
          linkedList.start = currentNode.next;
        }
        else {
          previousNode.next = currentNode.next;
        }
        return true;
      } 
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  hasKey(key){
    const hashValue = this.hash(key);
    const linkedList = this.lists[hashValue];
    let currentNode = linkedList.start;
    while(currentNode!==null){
      if(currentNode.item.key === key){
        return true;
      } 
      currentNode = currentNode.next;
    }
    return false;
  }

  getKeys(){
    return this.keys;
  }

  getValues(){
    let values = [];
    this.lists.forEach((list) =>{
      let currentNode = list.start;
      while(currentNode!==null){
        values.push(currentNode.item.value);
        currentNode = currentNode.next;
      }  
    });
    return values;
  }
}
