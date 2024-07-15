let array = [10, 20, 30, 40, 50, 60, 70,];


let position = 4

for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1]
}

array.length = array.length -1

console.log('Updated Array: ', array)