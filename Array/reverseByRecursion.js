// let array = [40, 30, 12, 25, 23, 45, 34, 27, 90, 50, 80, 70, 60]
let array = [7, 8, 9, 10]

let temp;

function customArrayReverseFuntion(array, start, end) {
    // console.log(array)

    if (start <= end) {
        temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        customArrayReverseFuntion(array, start + 1, end - 1)
    }

}

customArrayReverseFuntion(array, 0, array.length - 1)

console.log('Updated Array: ', array)