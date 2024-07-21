let queue = []

let currentSize = queue.length;
let maxSize = 5;

function enqueue(value){
    if(currentSize >= maxSize){
        return console.log("Can not add more than 5 elemet")
    }else{
        queue[currentSize] = value
        currentSize++
    }
}

function display(){
    console.log(queue)
}

function dequeue(){
    if(currentSize > 0){
       
        for(let i = 0; i < queue.length; i++){
            queue[i] = queue[i +1]
        }
        currentSize--
        queue.length  = currentSize

    } else{
        return console.log("Queues is empty")
    }
}



enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

display()
dequeue()

display()
