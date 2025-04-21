class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) this.head = newNode;
      else {
        let temp = this.head;
        while (temp.next) temp = temp.next;
        temp.next = newNode;
      }
    }
  
    print() {
      let temp = this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  