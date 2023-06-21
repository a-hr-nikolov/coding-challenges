/* 

### EASY ###

A unival tree (which stands for "universal value") is a tree where all nodes under it 
have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1);
root.left = new Node(1);
root.right = new Node(0);
root.left.left = new Node(1);
root.left.right = new Node(0);
root.right.left = new Node(1);
root.right.right = new Node(1);
root.left.left.left = new Node(1);

function isUnival(root) {
  if (!root) return true;

  const leftIsUnival = isUnival(root.left);
  const rightIsUnival = isUnival(root.right);
  if (!rightIsUnival || !leftIsUnival) return false;

  if (root.left && root.left.value !== root.value) return false;
  if (root.right && root.right.value !== root.value) return false;

  return true;
}

function countUnival(root) {
  if (!root) return 0;
  let count = 0;
  if (isUnival(root)) count++;
  return count + countUnival(root.left) + countUnival(root.right);
}

console.log(isUnival(root));
console.log(countUnival(root));
