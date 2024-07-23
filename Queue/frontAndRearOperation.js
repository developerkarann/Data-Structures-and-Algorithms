let queue = []

let currentSize = queue.length;
let maxSize = 5;

function enqueue(value) {
    if (currentSize >= maxSize) {
        return console.log("Can not add more than 5 elemet")
    } else {
        queue[currentSize] = value
        currentSize++
    }
}

function display() {
    console.log(queue)
}

function dequeue() {
    if (currentSize > 0) {

        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1]
        }
        currentSize--
        queue.length = currentSize

    } else {
        return console.log("Queues is empty")
    }
}

function front() {
    if (currentSize > 0) {
        return console.log(queue[0])
    } else {
        return console.log("Queues is empty")

    }
}
function rear() {
    if (currentSize > 0) {
        return console.log(queue[currentSize - 1])
    } else {
        return console.log("Queues is empty ewqdfwe")

    }
}

function isEmpty() {
    if (currentSize <= 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

enqueue(10)
enqueue(20)
enqueue(30)
enqueue(30)
enqueue(30)



display()
dequeue()

display()

front()
rear()
isEmpty()