let array = [3, 4, 5, 2, 1,]
let newArray = [7, 8, 9, 10]

let updatedArray = []

for (let i = 0; i < array.length; i++) {
    updatedArray[i] = array[i]
}
console.log(updatedArray)

for (let i = 0; i < newArray.length; i++) {
    updatedArray[array.length + i] = newArray[i]
}

console.log(updatedArray)