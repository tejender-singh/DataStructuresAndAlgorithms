import BinaryTreeNode from '../../BinaryTree/BinaryTreeNode';
import BinarySearchTree from '../BinarySearchTree';

describe('Binary Search Tree', () => {
  it('should be able to traverse', () => {
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

    const tree = new BinarySearchTree(one);

    expect(tree.getInOrderTraversalArray()).toEqual([6, 4, 2, 5, 1, 3]);
    expect(tree.getPreOrderTraversalArray()).toEqual([1, 2, 4, 6, 5, 3]);
    expect(tree.getPostOrderTraversalArray()).toEqual([6, 4, 5, 2, 3, 1]);
  });

  it('should insert node in existing Binary Search Tree', () => {
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const ten = new BinaryTreeNode(10);
    const three = new BinaryTreeNode(3);
    nine.setLeft(three);
    nine.setRight(ten);
    const fourteen = new BinaryTreeNode(14);
    ten.setRight(fourteen);
    const one = new BinaryTreeNode(1);
    const six = new BinaryTreeNode(6);
    three.setLeft(one);
    three.setRight(six);
    const four = new BinaryTreeNode(4);
    const seven = new BinaryTreeNode(7);
    six.setLeft(four);
    six.setRight(seven);

    const tree = new BinarySearchTree(nine);

    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10, 14]);
    tree.insert(13);

    //      TREE AFTER INSERTION
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \    /
    //       4     7  13

    expect(tree.getInOrderTraversalArray()).toEqual([
      1, 3, 4, 6, 7, 9, 10, 13, 14,
    ]);
  });

  it('should create Binary Search Tree using insertion', () => {
    //      Creating below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    expect(tree.getInOrderTraversalArray()).toEqual([3, 9]);
    tree.insert(10);
    expect(tree.getInOrderTraversalArray()).toEqual([3, 9, 10]);
    tree.insert(14);
    expect(tree.getInOrderTraversalArray()).toEqual([3, 9, 10, 14]);
    tree.insert(6);
    expect(tree.getInOrderTraversalArray()).toEqual([3, 6, 9, 10, 14]);
    tree.insert(1);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 6, 9, 10, 14]);
    tree.insert(4);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 9, 10, 14]);
    tree.insert(7);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10, 14]);
  });

  it('should search', () => {
    //      Searching in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.search(9)).toBe(true);
    expect(tree.search(3)).toBe(true);
    expect(tree.search(10)).toBe(true);
    expect(tree.search(14)).toBe(true);
    expect(tree.search(6)).toBe(true);
    expect(tree.search(1)).toBe(true);
    expect(tree.search(4)).toBe(true);
    expect(tree.search(7)).toBe(true);

    expect(tree.search(2)).toBe(false);
    expect(tree.search(5)).toBe(false);
    expect(tree.search(8)).toBe(false);
    expect(tree.search(11)).toBe(false);
    expect(tree.search(15)).toBe(false);
  });

  it('should delete non leaf node', () => {
    //      Deleting 3 in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10, 14]);

    tree.delete(3);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 4, 6, 7, 9, 10, 14]);
  });

  it('should delete leaf node from left of root', () => {
    //      Deleting 7 in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10, 14]);

    tree.delete(7);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 9, 10, 14]);
  });

  it('should delete leaf node from right of root', () => {
    //      Deleting 14 in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10, 14]);

    tree.delete(14);
    expect(tree.getInOrderTraversalArray()).toEqual([1, 3, 4, 6, 7, 9, 10]);
  });

  it('should find max', () => {
    //      Finding max in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.findMax()).toBe(14);

    tree.delete(14);
    expect(tree.findMax()).toBe(10);
  });

  it('should find min', () => {
    //      Finding min in below Binary Search Tree
    //          9
    //       /      \
    //      3        10
    //    /    \       \
    //   1      6       14
    //        /   \
    //       4     7

    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);
    tree.insert(3);
    tree.insert(10);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);

    expect(tree.findMin()).toBe(1);

    tree.delete(1);
    expect(tree.findMin()).toBe(3);
  });

  it('should find max and min from a tree having only one node', () => {
    const nine = new BinaryTreeNode(9);
    const tree = new BinarySearchTree(nine);

    expect(tree.findMin()).toBe(9);
    expect(tree.findMax()).toBe(9);
  });
});
