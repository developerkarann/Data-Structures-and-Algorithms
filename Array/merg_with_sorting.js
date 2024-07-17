let array1 = [3, 4, 6, 8, 9, 10, 15];
let array2 = [5, 7, 11, 13];

let newArray = []

let a1 = 0
let a2 = 0
let a3 = 0

while (a1 < array1.length && a2 < array2.length) {
    if (array1[a1] < array2[a2]) {
        newArray[a3] = array1[a1]
        a1++
    } else {
        newArray[a3] = array2[a2]
        a2++
    }
    a3++
}
while (a1 < array1.length) {
    newArray[a3] = array1[a1]
    a1++
    a3++
}

console.log(newArray)