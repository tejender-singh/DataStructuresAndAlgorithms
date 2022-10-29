import BinaryTreeNode from '../BinaryTree/BinaryTreeNode';

export default class BinarySearchTree {
  constructor(rootNode) {
    this.root = rootNode;
  }

  getInOrderTraversalArray(treeNode) {
    if (!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left
      ? this.getInOrderTraversalArray(treeNode.left)
      : [];
    const rightArray = treeNode.right
      ? this.getInOrderTraversalArray(treeNode.right)
      : [];
    return [...leftArray, treeNode.item, ...rightArray];
  }

  getPreOrderTraversalArray(treeNode) {
    if (!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left
      ? this.getPreOrderTraversalArray(treeNode.left)
      : [];
    const rightArray = treeNode.right
      ? this.getPreOrderTraversalArray(treeNode.right)
      : [];
    return [treeNode.item, ...leftArray, ...rightArray];
  }

  getPostOrderTraversalArray(treeNode) {
    if (!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left
      ? this.getPostOrderTraversalArray(treeNode.left)
      : [];
    const rightArray = treeNode.right
      ? this.getPostOrderTraversalArray(treeNode.right)
      : [];
    return [...leftArray, ...rightArray, treeNode.item];
  }

  getLeftMostItemOfSubTree(treeNode){
    if(!treeNode) {
      treeNode = this.root;
    }
    if(!treeNode.left){
      return treeNode;
    }
    let currentNode = treeNode;
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  getRightMostItemOfSubTree(treeNode){
    if(!treeNode) {
      treeNode = this.root;
    }
    if(!treeNode.right){
      return treeNode;
    }
    
    let currentNode = treeNode;
    while(currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode;
  }


  insert(item, node) {
    if(node === undefined) {
      node = this.root;
      if(this.root.item === undefined){
        this.root.item = item;
        return;
      }
    }

    if(item > node.item){
      if(!node.right){
        node.setRight(new BinaryTreeNode(item));
      } else {
        this.insert(item, node.right);
      }
    } else {
      if(!node.left){
        node.setLeft(new BinaryTreeNode(item));
      } else {
        this.insert(item, node.left);
      }
    }
  }

  search(item, node) {
    if(node === undefined){
      node = this.root;
    }
    if(node.item === undefined){
      return false;
    }

    if(item > node.item){
      if(!node.right){
        return false;
      } else {
        return this.search(item, node.right);
      }
    } else if(item < node.item){
      if(!node.left){
        return false;
      } else {
        return this.search(item, node.left);
      }
    } else {
      return true;
    }
  }

  delete(item, node){
    if(node === undefined) {
      node = this.root;
    }
    if(node.item === undefined){
      return false;
    }

    if(node.item === item){
      let leafNode;
      if(node.left){
        leafNode = this.getRightMostItemOfSubTree(node.left);
        const temp = leafNode.item;
        leafNode.item = node.item;
        node.item = temp;
      } else if (node.right){
        leafNode = this.getLefttMostItemOfSubTree(node.right);
        const temp = leafNode.item;
        leafNode.item = node.item;
        node.item = temp;
      } else {
        leafNode = node;
      }

      if(leafNode.parent.left === leafNode){
        leafNode.parent.left = undefined;
      }
      else if(leafNode.parent.right === leafNode){
        leafNode.parent.right = undefined;
      }
      leafNode.parent = undefined;
      return true;
    }else if(item > node.item){
      if(!node.right){
        return false;
      } else {
        return this.delete(item, node.right);
      }
    } else if(item < node.item){
      if(!node.left){
        return false;
      } else {
        return this.delete(item, node.left);
      }
    }
  }

  findMin(){
    if(!this.root.left){
      return this.root.item;
    }
    return this.getLeftMostItemOfSubTree(this.root).item;
  }

  findMax(){
    if(!this.root.right){
      return this.root.item;
    }
    return this.getRightMostItemOfSubTree(this.root).item;
  }

}
