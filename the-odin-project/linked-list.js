class Node {
  constructor(data = null, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    if (!this.tail) this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    this.head.prev = newNode;
    this.head = newNode;
  }

  append(data) {
    if (!this.tail) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insertAt(value, index) {
    if (index < 0) return 'Invalid Index';
    if (index === 0) this.prepend(value);
    const nodeAtIndex = this.nodeAt(index);
    if (!nodeAtIndex) {
      this.append(value);
      return console.log(
        'Out of list bounds, value appended to the end of the list'
      );
    }
    const newNode = new Node(value, nodeAtIndex, nodeAtIndex.prev);
    newNode.prev.next = newNode;
    nodeAtIndex.prev = newNode;
  }

  removeFrom(index) {
    const nodeAtIndex = this.nodeAt(index);
    if (!nodeAtIndex) return;
    nodeAtIndex.prev.next = nodeAtIndex.next;
    nodeAtIndex.next.prev = nodeAtIndex.prev;
  }

  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  toString() {
    if (!this.head) return 'Empty list';
    return List.nodesToString(this.head);
  }

  static nodesToString(currentNode) {
    if (!currentNode) return `null`;
    return `( ${currentNode.data} ) -> ${List.nodesToString(currentNode.next)}`;
  }

  size() {
    if (!this.head) return 0;
    let count = 1;
    let currentNode = this.head.next;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  at(index) {
    if (index < 0) return 'Invalid index';
    if (!this.head) return "Doesn't exist";
    return this.nodeAt(index).data;
  }

  nodeAt(index) {
    if (index < 0 || !this.head) return null;
    let currentNode = this.head;
    let count = 0;
    while (currentNode && count <= index) {
      if (count === index) return currentNode;
      currentNode = currentNode.next;
      ++count;
    }
    return null;
  }

  pop() {
    if (!this.tail) return 'Nothing to pop';
    const lastItem = this.tail;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    return lastItem.data;
  }

  contains(value) {
    return List.checkForValue(this, value).contains;
  }

  find(value) {
    return List.checkForValue(this, value).index;
  }

  static checkForValue(list, value) {
    if (!list.head) return { contains: false, index: null };
    let currentNode = list.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.data === value)
        return { contains: true, index: count, node: currentNode };
      currentNode = currentNode.next;
      ++count;
    }
    return { contains: false, index: null };
  }
}

const myList = new List();

// Appending 10 elements to the list
for (let i = 1; i <= 10; i++) {
  myList.append(`Element ${i}`);
}

// Displaying the list
myList.display();
console.log(myList.toString());
myList.removeFrom(5);
myList.removeFrom(5);
myList.insertAt('manja', 8);
myList.display();
console.log(myList.toString());
