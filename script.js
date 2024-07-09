
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

    // Insertion at the beginning
    insertAtBeginning(newData) {
        let newNode = new Node(newData);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insertion at the end
    insertAtEnd(newData) {
        let newNode = new Node(newData);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    // Insertion after a given node
    insertAfter(prevNode, newData) {
        if (!prevNode) {
            console.log("The given previous node must be in the LinkedList.");
            return;
        }
        let newNode = new Node(newData);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }

    // Deletion from the beginning
    deleteFromBeginning() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
    }

    // Deletion from the end
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let secondLast = this.head;
        while (secondLast.next.next) {
            secondLast = secondLast.next;
        }
        secondLast.next = null;
    }

    // Deletion after a given node
    deleteAfter(prevNode) {
        if (!prevNode || !prevNode.next) {
            console.log("The given previous node is null or there is no next node");
            return;
        }
        prevNode.next = prevNode.next.next;
    }

    // Traverse the linked list
    traverse() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }

    // Search for an element
    search(key) {
        let current = this.head;
        while (current) {
            if (current.data === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Update an element
    update(oldData, newData) {
        let current = this.head;
        while (current) {
            if (current.data === oldData) {
                current.data = newData;
                return;
            }
            current = current.next;
        }
    }

    // Display the linked list
    display() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }
}

// Example usage
let llist = new LinkedList();

// Insertions
llist.insertAtBeginning(1);
llist.insertAtBeginning(2);
llist.insertAtEnd(3);
llist.insertAfter(llist.head, 4);

// Display list
llist.display();  

// Deletions
llist.deleteFromBeginning();
llist.deleteFromEnd();
llist.deleteAfter(llist.head);

// Display list
llist.display(); 

// Traverse
llist.traverse();  

// Search
console.log(llist.search(1));  
console.log(llist.search(4));  

// Update
llist.update(4, 5);
llist.display(); 