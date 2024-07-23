class Queue {

    constructor(size) {
        this.max = size;
        this.items = new Array(size)
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }


    enqueue(value) {
        if (this.currentSize !== this.max) {
            if (this.rear === this.max -1) {
                 this.rear = 0
            } else {
                this.rear++;
            }
            this.items[this.rear] = value;
            this.currentSize++;
            if ((this.front == - 1)) {
                this.front = this.rear
            }
        } else {

        }
    }

    dequeue() {
        if (this.currentSize !== 0) {
            this.items[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0
            } else {
                this.front++
            }
            this.currentSize--
        } else {
            this.front = -1;
            this.rear = -1;
            return console.log('Queue is full')
        }
    }
}

let queue = new Queue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.dequeue()
queue.enqueue(60)
queue.dequeue()
queue.enqueue(70)
queue.dequeue()

console.log(queue)