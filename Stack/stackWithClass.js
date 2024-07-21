
class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.item.length
    }

    push(value) {
        if (this.currentSize >= this.maxSize) {
            return console.log('Stack is full !!!')
        }
        this.item[this.currentSize] = value;
        this.currentSize++
    }
    pop() {
        if (this.currentSize > 0) {
            this.currentSize--;
            this.item.length = this.currentSize
        } else {
            return console.log('Stack is empty')
        }
    }
    display() {
        console.log(this.item)
    }
}

str = new Stack(5)

str.push(50)
str.push(20)
str.push(40)
str.push(60)
str.push(80)

str.pop()
str.pop()
str.pop()

str.display()
