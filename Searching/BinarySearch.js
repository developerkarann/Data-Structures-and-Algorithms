// Iterative Approach >>>>

let data = [5, 9, 13, 17]

let find = 17;
let start = 0;
let end = data.length - 1;
let position = undefined

while (start <= end) {

    let midPoint = Math.floor((start + end) / 2)

    console.log(midPoint, data[midPoint])

    if (data[midPoint] === find) {
        position = midPoint;
        break;

    } else if (data[midPoint] < find) {
        start = midPoint + 1
        
    } else {
        end = midPoint - 1
    }
}

console.log('Position Of', find ,'Is Index', position)
