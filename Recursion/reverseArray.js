let array = [1,2,3,4,5]

function reverseArray(array, start, end){

    if (start <= end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        reverseArray(array, start + 1, end -1)
    }

}

reverseArray(array, 0, array.length -1)

console.log("Updated Array: ",array)