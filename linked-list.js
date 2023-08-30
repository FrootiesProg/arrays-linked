class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    // Populate the linked list with initial values
    for (let val of vals) this.push(val);
  }

  // Append a new node with value 'val' to the tail of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a new node with value 'val' to the head of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove and return the value at the tail of the list
  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current.val;
  }

  // Remove and return the value at the head of the list
  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode.val;
  }

  // Retrieve the value at the specified index 'idx'
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  // Set the value of the node at index 'idx' to 'val'
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  // Insert a new node with value 'val' at index 'idx'
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  // Remove and return the value at index 'idx'
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.length--;
      return current.val;
    }
  }

  // Calculate and return the average of all values in the list
  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
