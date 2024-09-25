class List {

    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head;
        this.size = 1
    }

    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++
    }
    // Traversing in LinkedList #01
    traversing() {
        console.log('Traversing Function Called')
        let counter = 0;
        let currentNode = this.head
        while (counter < this.size) {
            console.log(currentNode)
            currentNode = currentNode.next;
            counter++
        }
    }

    // Remove node from the linkedlist #02

    deleteNode(index) {
        let counter = 1;
        let leadNode = this.head;
        if (index === 1) {
            this.head = this.head.next
        } else {
            while (counter < index - 1) {
                leadNode = leadNode.next;
                counter++
                console.log(leadNode)
            }
            let nextNode = leadNode.next.next;
            leadNode.next = nextNode
            console.log(leadNode)
        }
    }

}

let list = new List(100)

list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)

// list.traversing()

list.deleteNode(2)

// console.log(list)

