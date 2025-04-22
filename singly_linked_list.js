class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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

    before(data) {
        const newNode = new Node(data);
        if (!this.head) this.head = newNode;
        else {
            let temp = this.head;
            while (temp.next) {
                if (temp.next.data === data) {
                    newNode.next = temp.next;
                    temp.next = newNode;
                    return;
                }
                temp = temp.next;
            }
        }
    }

    after(data) {
        const newNode = new Node(data);
        if (!this.head) this.head = newNode;
        else {
            let temp = this.head;
            while (temp) {
                if (temp.data === data) {
                    newNode.next = temp.next;
                    temp.next = newNode;
                    return;
                }
                temp = temp.next;
            }
        }
    }

    delete(data) {
        if (!this.head) return;
        else if (this.head.data === data) this.head = this.head.next;
        else {
            let temp = this.head;
            while (temp.next) {
                if (temp.next.data === data) {
                    temp.next = temp.next.next;
                    return;
                }
                temp = temp.next;
            }
        }
    }   
}

const list = new Node();
list.append(1);
list.append(2);
list.append(3); 
list.before(2);
list.after(2);
list.delete(3);