import BinaryTree from '../BinaryTree';
import BinaryTreeNode from '../BinaryTreeNode';

describe('Binary Tree', () => {
  it('should create Binary Tree with one node', () => {
    const root = new BinaryTreeNode(5);
    expect(root.parent).toBe(undefined);
    expect(root.left).toBe(undefined);
    expect(root.right).toBe(undefined);
    expect(root.height).toBe(0);
    expect(root.depth).toBe(0);
    expect(root.item).toBe(5);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    expect(one.parent).toBe(undefined);
    expect(one.left).toBe(two);
    expect(one.right).toBe(three);
    expect(one.height).toBe(3);
    expect(one.depth).toBe(0);
    expect(one.item).toBe(1);

    expect(two.parent).toBe(one);
    expect(two.left).toBe(four);
    expect(two.right).toBe(five);
    expect(two.height).toBe(2);
    expect(two.depth).toBe(1);
    expect(two.item).toBe(2);

    expect(three.parent).toBe(one);
    expect(three.left).toBe(undefined);
    expect(three.right).toBe(undefined);
    expect(three.height).toBe(0);
    expect(three.depth).toBe(1);
    expect(three.item).toBe(3);

    expect(four.parent).toBe(two);
    expect(four.left).toBe(six);
    expect(four.right).toBe(undefined);
    expect(four.height).toBe(1);
    expect(four.depth).toBe(2);
    expect(four.item).toBe(4);

    expect(five.parent).toBe(two);
    expect(five.left).toBe(undefined);
    expect(five.right).toBe(undefined);
    expect(five.height).toBe(0);
    expect(five.depth).toBe(2);
    expect(five.item).toBe(5);

    expect(six.parent).toBe(four);
    expect(six.left).toBe(undefined);
    expect(six.right).toBe(undefined);
    expect(six.height).toBe(0);
    expect(six.depth).toBe(3);
    expect(six.item).toBe(6);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    expect(tree.getPreOrderTraversalArray()).toEqual([1,2,4,6,5,3]);
    expect(tree.getPostOrderTraversalArray()).toEqual([6,4,5,2,3,1]);

    expect(tree.getLeftMostItemOfSubTree(one)).toEqual(six);
    expect(tree.getLeftMostItemOfSubTree(two)).toEqual(six);
    expect(tree.getLeftMostItemOfSubTree(three)).toBe(three);
    expect(tree.getLeftMostItemOfSubTree(four)).toEqual(six);
    expect(tree.getLeftMostItemOfSubTree(five)).toBe(five);
    expect(tree.getLeftMostItemOfSubTree(six)).toBe(six);

    expect(tree.successorInOrderTraversal(six)).toEqual(four);
    expect(tree.successorInOrderTraversal(four)).toEqual(two);
    expect(tree.successorInOrderTraversal(two)).toEqual(five);
    expect(tree.successorInOrderTraversal(five)).toEqual(one);
    expect(tree.successorInOrderTraversal(one)).toEqual(three);
    expect(tree.successorInOrderTraversal(three)).toBe(undefined);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertAfterInOrderTraversal(one, ten);
    expect(tree.successorInOrderTraversal(one)).toEqual(ten);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,10,3]);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertAfterInOrderTraversal(two, ten);
    expect(tree.successorInOrderTraversal(two)).toEqual(ten);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,10,5,1,3]);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertAfterInOrderTraversal(five, ten);
    expect(tree.successorInOrderTraversal(two)).toEqual(five);
    expect(tree.successorInOrderTraversal(five)).toEqual(ten);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,10,1,3]);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertBeforeInOrderTraversal(five, ten);
    expect(tree.successorInOrderTraversal(two)).toEqual(ten);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,10,5,1,3]);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertBeforeInOrderTraversal(six, ten);
    expect(tree.successorInOrderTraversal(ten)).toEqual(six);
    expect(tree.getInOrderTraversalArray()).toEqual([10,6,4,2,5,1,3]);
  });

  it('should create empty Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    const ten = new BinaryTreeNode(10);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.insertBeforeInOrderTraversal(one, ten);
    expect(tree.successorInOrderTraversal(five)).toEqual(ten);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,10,1,3]);
  });

  it('should delete from Binary Tree', () => {
    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.delete(one);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,3]);
  });

  it('should delete from Binary Tree', () => {

      //       1
      //     /   \
      //     2     3
      //   /   \    
      //  4     5
      // /
      // 6

    const one = new BinaryTreeNode(1);
    const two = new BinaryTreeNode(2);
    const three = new BinaryTreeNode(3);
    one.setLeft(two);
    one.setRight(three);
    const four = new BinaryTreeNode(4);
    const five = new BinaryTreeNode(5);
    two.setLeft(four);
    two.setRight(five);
    const six = new BinaryTreeNode(6);
    four.setLeft(six);

    const tree = new BinaryTree(one);

    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1,3]);
    tree.delete(three);
    expect(tree.getInOrderTraversalArray()).toEqual([6,4,2,5,1]);
  });
});
