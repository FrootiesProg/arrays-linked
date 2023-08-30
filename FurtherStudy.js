// Doubly Linked List
class DoublyNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    // Method to add a new node to the end of the list
    push(val) {
      const newNode = new DoublyNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    // Function to reverse a linked list in place
    reverseInPlace() {
      let current = this.head;
      let temp = null;
  
      while (current !== null) {
        // Swap next and prev pointers of the current node
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
  
        // Move to the next node
        current = current.prev;
  
        // Update the head if we've reached the end of the list
        if (current !== null && current.prev === null) {
          this.head = current;
        }
      }
    }
  
    // Static function to merge two sorted linked lists into a new sorted linked list
    static mergeSortedLists(a, b) {
      const mergedList = new DoublyLinkedList();
      let nodeA = a.head;
      let nodeB = b.head;
  
      while (nodeA !== null && nodeB !== null) {
        if (nodeA.val < nodeB.val) {
          mergedList.push(nodeA.val);
          nodeA = nodeA.next;
        } else {
          mergedList.push(nodeB.val);
          nodeB = nodeB.next;
        }
      }
  
      while (nodeA !== null) {
        mergedList.push(nodeA.val);
        nodeA = nodeA.next;
      }
  
      while (nodeB !== null) {
        mergedList.push(nodeB.val);
        nodeB = nodeB.next;
      }
  
      return mergedList;
    }
  
    // Method to print the contents of the linked list
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
  
  console.log("Merged Sorted List:");
  mergedList.print();
  
  //Pivot Around Value
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    // Method to add a new node to the end of the list
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  
    // Method to pivot the linked list around a given value
    pivot(pivotValue) {
      let current = this.head;
      let smallerHead = null;
      let smallerTail = null;
      let largerHead = null;
      let largerTail = null;
  
      while (current) {
        const nextNode = current.next;
        current.next = null; // Disconnect current node
  
        if (current.val < pivotValue) {
          if (!smallerHead) {
            smallerHead = current;
            smallerTail = current;
          } else {
            smallerTail.next = current;
            smallerTail = current;
          }
        } else {
          if (!largerHead) {
            largerHead = current;
            largerTail = current;
          } else {
            largerTail.next = current;
            largerTail = current;
          }
        }
  
        current = nextNode;
      }
  
      if (!smallerHead) {
        this.head = largerHead;
      } else {
        smallerTail.next = largerHead;
        this.head = smallerHead;
      }
    }
  
    // Method to print the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  
  const ll = new LinkedList([7, 6, 2, 3, 9, 1, 1]);
  ll.pivot(5);
  ll.print();
  
  // Circular Array 
  class CircularArray {
    constructor() {
      this.array = [];
      this.startingIndex = 0;
    }
  
    // Method to add an item to the circular array
    addItem(item) {
      this.array.push(item);
    }
  
    // Method to rotate the circular array
    rotate(k) {
      this.startingIndex = (this.startingIndex + k) % this.array.length;
    }
  
    // Method to get an item from the circular array by index
    getByIndex(index) {
      const adjustedIndex = (index + this.startingIndex) % this.array.length;
      return this.array[adjustedIndex];
    }
  
    // Method to print the circular array
    printArray() {
      for (let i = 0; i < this.array.length; i++) {
        const adjustedIndex = (i + this.startingIndex) % this.array.length;
        console.log(this.array[adjustedIndex]);
      }
    }
  }
  