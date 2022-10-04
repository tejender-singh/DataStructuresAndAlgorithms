export default class BinaryTreeNode {
  constructor(item, parent, left, right) {
    this.item = item;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  get height(){
    if(!this.left && !this.right){
      return 0;
    }
    return Math.max(this.left ? this.left.height : 0, this.right ? this.right.height : 0) + 1;
  }
  
  get depth(){
    let depth = 0;
    let currentNode = this.parent;
    while(currentNode){
      depth++;
      currentNode = currentNode.parent;
    }
    return depth;
  }

  setLeft(treeNode){
    this.left = treeNode;
    treeNode.parent = this;
  }

  setRight(treeNode){
    this.right = treeNode;
    treeNode.parent = this;
  }  
}
