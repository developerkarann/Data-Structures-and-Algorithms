let array = [10, 20, 40, 50, 60, 70,];

let position = 1;

let newElement = 30;

for (let i = array.length - 1; i >= 0; i--) {
    if (i >= position) {
        array[i + 1] = array[i]
    }
    if (i === position) {
        array[i] = newElement
    } 
}

console.log('Updated Array: ', array)