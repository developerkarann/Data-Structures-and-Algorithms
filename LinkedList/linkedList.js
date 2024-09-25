class List{

    constructor(data){
         this.head = {
            value: data,
            next: null,
         };
         this.tail = this.head;
         this.size = 1
    }

    appendNode(nodeData){
         let newNode = {
            value: nodeData,
            next: null
         };
         this.tail.next = newNode;
         this.tail = newNode;
         this.size++
    }
}

let list = new List(100)

list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)

console.log(list)

