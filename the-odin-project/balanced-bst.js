/*

Pseudo code for creating a balance binary search tree.

We start with a sorted array as input.

1. Find the median of the array and make it the root.
2. Find the median of the left subarray and make it the root of that subarray.
3. Find the median of the right subarray and make it the root of that subarray.



*/
// A merge sort algorithm that also removes any duplicate elements.

function mergeSort(array) {
  if (array.length <= 1) return array;
  const splitter = Math.floor(array.length / 2);
  const halfOne = [...mergeSort(array.slice(0, splitter))];
  const halfTwo = [...mergeSort(array.slice(splitter))];
  const joined = [];

  while (halfOne.length !== 0 && halfTwo.length !== 0) {
    // This clause makes sure to remove duplicate elements
    if (halfOne[0] === halfTwo[0]) {
      joined.push(halfOne.shift());
      halfTwo.shift();
      continue;
    }
    if (halfOne[0] < halfTwo[0]) joined.push(halfOne.shift());
    else joined.push(halfTwo.shift());
  }

  return [...joined, ...halfOne, ...halfTwo];
}
class Node {
  constructor(data = null, height = 0, left = null, right = null) {
    this.data = data;
    this.height = height;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  populate(array) {
    this.root = BST.buildTree(mergeSort(array));
  }

  static buildTree(array, height = 0) {
    if (array.length < 1) return null;
    const medianIndex = Math.floor(array.length / 2);
    const newNode = new Node(array[medianIndex], height++);
    const leftArray = array.slice(0, medianIndex);
    const rightArray = array.slice(medianIndex + 1);
    newNode.left = BST.buildTree(leftArray, height);
    newNode.right = BST.buildTree(rightArray, height);
    return newNode;
  }

  insert(...values) {
    values.forEach(value => BST.insertValue(this.root, value));
  }

  static insertValue(node, value) {
    if (!node) return;
    if (node.data > value) {
      if (node.left) return BST.insertValue(node.left, value);
      const newNode = new Node(value, node.height + 1);
      node.left = newNode;
      return;
    }
    if (node.data < value) {
      if (node.right) return BST.insertValue(node.right, value);
      const newNode = new Node(value, node.height + 1);
      node.right = newNode;
      return;
    }
  }

  remove(...values) {
    values.forEach(value => (this.root = BST.removeNode(this.root, value)));
  }

  static removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (node.data > value) {
      node.left = BST.removeNode(node.left, value);
    } else if (node.data < value) {
      node.right = BST.removeNode(node.right, value);
    } else {
      // Case 1: No children
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: One child
      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      // Case 3: Two children
      // Find the successor (minimum value in the right subtree)
      const successor = BST.findMinNode(node.right);
      // Replace the value of the node to be removed with the successor value
      node.data = successor.data;
      // Remove the successor node recursively
      node.right = BST.removeNode(node.right, successor.data);
    }

    return node;
  }

  static findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return BST.findMinNode(node.left);
  }

  find(value, node = this.root) {
    if (!node) return;
    if (node.data === value) return node;
    if (node.data > value) {
      if (node.left) return this.find(value, node.left);
      return null;
    }
    if (node.data < value) {
      if (node.right) return this.find(value, node.right);
      return null;
    }
  }

  prettyPrint = (node = this.root, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  levelOrder(callback) {
    if (!this.root) return [];

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      if (typeof callback === 'function') callback(currentNode);
      else result.push(currentNode.data);
    }

    return result;
  }

  preorder(callback, node = this.root) {
    if (!node) return [];

    if (typeof callback === 'function') callback(node);
    else
      return [
        node.data,
        ...this.preorder(null, node.left),
        ...this.preorder(null, node.right),
      ];

    const left = this.preorder(callback, node.left);
    const right = this.preorder(callback, node.right);
    return [node.data, ...left, ...right];
  }

  inorder(callback, node = this.root) {
    if (!node) return [];

    const left = this.inorder(callback, node.left);

    if (typeof callback === 'function') callback(node);
    else
      return [
        ...this.inorder(null, node.left),
        node.data,
        ...this.inorder(null, node.right),
      ];

    const right = this.inorder(callback, node.right);
    return [...left, node.data, ...right];
  }

  postorder(callback, node = this.root) {
    if (!node) return [];

    const left = this.postorder(callback, node.left);
    const right = this.postorder(callback, node.right);

    if (typeof callback === 'function') callback(node);
    else
      return [
        ...this.postorder(null, node.left),
        ...this.postorder(null, node.right),
        node.data,
      ];

    return [...left, ...right, node.data];
  }

  height(node = this.root) {
    if (!node) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return leftHeight < rightHeight ? rightHeight + 1 : leftHeight + 1;
  }

  depth(node) {
    return node.height;
  }

  isBalanced(node = this.root) {
    if (!node) return true;
    if (Math.abs(this.height(node.right) - this.height(node.left)) > 1)
      return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    if (this.isBalanced()) return;
    const newArray = this.inorder();
    this.root = BST.buildTree(newArray);
  }
}

const testArray = [1, 4, 5, 8, 10, 12, 14, 15, 17, 20, 23, 25, 27, 30, 32, 35];
const testArray2 = [1, 2, 3, 4, 5, 6, 7];
const testUnsorted = [8, 3, 12, 6, 10, 5, 14, 9, 2, 7, 11, 4, 13, 1, 15];
const testDuplicates = [
  8, 3, 12, 6, 10, 5, 14, 9, 2, 7, 11, 4, 13, 1, 15, 3, 10, 7, 4, 9, 6,
];
const testBST = new BST();
testBST.populate(testDuplicates);
testBST.insert(...testArray);
testBST.prettyPrint();
testBST.rebalance();
testBST.prettyPrint();

// testBST.insert(54, 12, 34, -1, -13, -41, 55, 1213, 111);
// testBST.prettyPrint();
// testBST.remove(12, 11, 10, 9, 8, 1, 2, 3, 4, 5);
// testBST.prettyPrint();
console.log(testBST.isBalanced());
