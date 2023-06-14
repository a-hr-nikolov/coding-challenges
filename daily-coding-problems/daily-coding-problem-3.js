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
  return `${root.value}, ${serialize(root.left)}, ${serialize(root.right)}`;
}

function deserialize(string) {
  const fromString = string.split(',');

  function buildTree(array) {
    const value = array[0];
    if (value === 'null') return null;

    return { value, left, right };
  }
}

console.log(serialize(node));

/* 

Pseudo-code solution for serialization:
1. Take the string.
2. Extract the the value and assign it to a value in a new object.
3. Pass the remaining inner string for the left side.
4. Pass the remaining inner string for the right side.
5. Return null for base case.
6. Return object for recursive case.

*/

//
//
//
//
//
//
//
//
//
//

// ###########################################################
// CODE BELOW IS WORK IN PROGRESS FOR JSON-LIKE IMPLEMENTATION
// ###########################################################

/* 

function serialize(root) {
  if (!root) return 'null';
  let serialized = `{"value":${
    typeof root.value === 'string' ? `"${root.value}"` : root.value
  },"left":${serialize(root.left)},"right":${serialize(root.right)}}`;

  return serialized;
}

 */

/* 

function deser(serialized) {
  const splitArray = serialized.split('').slice(1, -1);
  const filtered = splitArray
    //.filter(item => item !== '{' && item !== '}')
    .join('')
    .split(',');
  let firstFiltered = filtered[0];
  let indicesOC = findBracePairs(splitArray.join(''));
  let left, right;
  if (indicesOC === null) {
    left == null;
    right == null;
  } else {
  }

  //let returned = { value: filtered[1], left: deser(), right: deser()};

  return filtered;
}

function findBracePairs(string) {
  let arrayed = string.split('');
  let indexOpen = arrayed.findIndex(item => item === '{');
  if (indexOpen < 0) return null;
  let indexClose = 0;
  let sameBraceCount = -1;

  for (let i = 0; i < arrayed.length; i++) {
    if (arrayed[i] === '{') ++sameBraceCount;

    if (arrayed[i] === '}') {
      if (sameBraceCount > 0) --sameBraceCount;
      else {
        indexClose = i;
        break;
      }
    }
  }

  return [indexOpen, indexClose];
}

function deserialize(serialized) {
  if (!serialized) return null;
  const splitString = serialized.split(',');

  function buildTree(stringified) {
    let left, right, value;

    let filtered = stringified[0]
      .split('')
      .filter(item => item !== '{' && item !== '}')
      .join('')
      .split(':');

    // let extracted = stringified[0].split(':');
    value = filtered[filtered.length - 1];
    if (value === null) return value;
    if (filtered[0] === 'left') left = buildTree(stringified.slice(1));

    const newTree = new Node(value, buildTree(), buildTree());

    switch (extracted[0]) {
    }

    let nextSplit;
    if (!stringified[1]) return;
    nextSplit = stringified[1].split(':');

    //let left =
    return value;
  }

  // return buildTree(splitString);
  return splitString;
  return splitString[3].split(':').slice(1).join(':');
  const toArray = serialized.split('');
  const withoutBraces = serialized.slice(1, -1);
  return withoutBraces;
  const newObj = {};
  return newObj;
}

 */

// console.log(serialize(node));
// console.log(findBracePairs(serialize(node).slice(1, -1)));
// console.log(deser(serialize(node)));
// console.log(deserialize(serialize(node)));
