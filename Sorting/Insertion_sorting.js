let array = [12, 11, 13, 5, 6]

function insertionSort(data) {

    let i, current, j;

    for (i = 1; i < data.length; i++) {
        // console.log(data[i])

        current = data[i]
        j = i - 1;
        // console.log('j = i-1',j)
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j]
            j--;
        // console.log('while, j = i-1',j)
        }
        data[j + 1] = current;
    }

}


insertionSort(array)

console.log(array)
