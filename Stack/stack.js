let stack = []

let currentSize = stack.length;

let maxValue = 5;

function push(value){
    if (currentSize >= maxValue) {
       return console.log(`Stack is full, You can't add ${value}`)
    }
    stack[currentSize] = value;
    currentSize += 1;
}

function pop(){
    if (currentSize > 0) {
        currentSize -= 1;
        stack.length = currentSize
    }else{
        return console.log('Stack is already empty')
    }
}

push(5)
push(10)
push(30)
push(20)
push(80)

pop()


console.log(stack)