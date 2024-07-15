let array = [20, 40, 60, 5, 10, 70, 80, 99, 70]

let item = 70;
let index = undefined

for (let i = 0; i < array.length; i++) {

    if (array[i] === item) {
      index = [i];
      break
    }

}

console.log(item,'found in array at', index, 'index')


