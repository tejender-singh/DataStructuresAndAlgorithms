import BinaryTreeNode from './BinaryTreeNode';

export default class BinaryTree {
  constructor(rootNode) {
    this.root = rootNode;
  }

  getInOrderTraversalArray(treeNode){
    if(!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left ? this.getInOrderTraversalArray(treeNode.left) : [];
    const rightArray = treeNode.right ? this.getInOrderTraversalArray(treeNode.right) : [];
    return [ ...leftArray, treeNode.item, ...rightArray ];
  }

  getPreOrderTraversalArray(treeNode){
    if(!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left ? this.getPreOrderTraversalArray(treeNode.left) : [];
    const rightArray = treeNode.right ? this.getPreOrderTraversalArray(treeNode.right) : [];
    return [ treeNode.item, ...leftArray, ...rightArray ];
  }

  getPostOrderTraversalArray(treeNode){
    if(!treeNode) {
      treeNode = this.root;
    }
    const leftArray = treeNode.left ? this.getPostOrderTraversalArray(treeNode.left) : [];
    const rightArray = treeNode.right ? this.getPostOrderTraversalArray(treeNode.right) : [];
    return [ ...leftArray, ...rightArray, treeNode.item ];
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

  predecessorInOrderTraversal(treeNode){
    if(treeNode.left){
      return this.getRightMostItemOfSubTree(treeNode.left);;
    } else {
      let currentNode = treeNode;
      while(currentNode.parent.right !== currentNode){
        currentNode = currentNode.parent;
        if(!currentNode.parent){
          return currentNode;
        }
      }
      return currentNode.parent;
    }
  }

  successorInOrderTraversal(treeNode){
    if(treeNode.right){
      return this.getLeftMostItemOfSubTree(treeNode.right);
    } else {
      let currentNode = treeNode;
      while(currentNode.parent.left !== currentNode){
        currentNode = currentNode.parent;
        if(!currentNode.parent){
          return undefined;
        }
      }
      return currentNode.parent;
    }
  }

  insertAfterInOrderTraversal(treeNode, newNode){
    if(!treeNode.right){
      treeNode.setRight(newNode);
    } else {
      const currentNode = this.getLeftMostItemOfSubTree(treeNode.right);
      currentNode.setLeft(newNode);
    }

  }

  insertBeforeInOrderTraversal(treeNode, newNode){
    if(!treeNode.left){
      treeNode.setLeft(newNode);
    } else {
      const currentNode = this.getRightMostItemOfSubTree(treeNode.left);
      currentNode.setRight(newNode);      
    }
  }

  delete(treeNode){
    if(!treeNode.left && !treeNode.right){
      this.detachLeafNode(treeNode);
    } else if(treeNode.left){
      let currentNode = treeNode;
      let prevNode = treeNode;
      while(currentNode.left || currentNode.right){
        currentNode = currentNode.left ? this.predecessorInOrderTraversal(currentNode) : this.successorInOrderTraversal(currentNode);
        let temp = currentNode.item;
        currentNode.item = prevNode.item;
        prevNode.item = temp;
        prevNode = currentNode;
      }
      this.detachLeafNode(currentNode);
    } else if(treeNode.right){
      let currentNode = treeNode;
      let prevNode = treeNode;
      while(currentNode.left || currentNode.right){
        currentNode = currentNode.right ? this.successorInOrderTraversal(currentNode) : this.predecessorInOrderTraversal(currentNode);
        let temp = currentNode.item;
        currentNode.item = prevNode.item;
        prevNode.item = temp;
        prevNode = currentNode;
      }
      this.detachLeafNode(currentNode);
    }
  }

  detachLeafNode(treeNode){
    if(treeNode.parent.left === treeNode){
      treeNode.parent.left = undefined;
    } else if(treeNode.parent.right === treeNode){
      treeNode.parent.right = undefined;
    }
    treeNode.parent = undefined;
  }
}
