let data = [10, 15, 20, 25, 30, 35, 40]

let find = 30;
let start = 0;
let end = data.length - 1;
let position = undefined



function recursiveBinary(data, start, end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(data[mid])
    if (data[mid] === find) {
        position = mid
        return;
    } else if (data[mid] < find) {
        recursiveBinary(data, mid + 1, end)
    } else {
        recursiveBinary(data, start, mid - 1)
    }
}

recursiveBinary(data, start, end)
console.log(position)