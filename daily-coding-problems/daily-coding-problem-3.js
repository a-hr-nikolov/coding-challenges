/* 

### MEDIUM ###

Given the root to a binary tree, implement serialize(root), which serializes the tree 
into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))

assert deserialize(serialize(node)).left.left.val == 'left.left' 

*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right')
);

function serialize(root) {
  if (!root) return 'null';
  let strflag;
  if (typeof root.value === 'string') strflag = true;
  let serialized = `{"value":${
    typeof root.value === 'string' ? `"${root.value}"` : root.value
  },"left":${serialize(root.left)},"right":${serialize(root.right)}}`;

  return serialized;
}

function deserialize(serialized) {
  if (!serialized) return null;
  const newObj = {
    //value: serialized.match(/(?<="value":)"?*+"?(?>,)/),
  };
  serialized.match('');
  return newObj;
}

console.log(serialize(node));
console.log(JSON.stringify(node));
console.log(JSON.parse(JSON.stringify(node)));
