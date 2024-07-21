let data = []
let currentSize = data.length

function push(newValue) {
    data[currentSize] = newValue
    currentSize += 1;
}

function pop() {
    lastRemovedItem = data[currentSize-1]
    currentSize -= 1;
    data.length = currentSize
    return lastRemovedItem
}

function reverseString(item) {

    // console.log(item)

    for (let i = 0; i < item.length; i++) {
        push(item[i])
    }
    for (let i = 0; i < item.length; i++) {
        item[i] = pop()
        // pop()
    }

}

let str = 'karan pal';
str = str.split('');

reverseString(str)
str = str.join('')
console.log(str)