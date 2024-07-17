// let array = [40, 30, 12, 25]
let array = [40, 30, 12, 25, 23 ,45,34,27,90,50,80,70,60]

for(let i = 0; i < array.length; i++){
    
    for(let j = 0; j < array.length; j++){
        // console.log(array)
        if(array[j] > array[j+1]){
            let temp = array[j]
            array[j] = array[j + 1]
            array[j +1 ] = temp
        }
    }
}

console.log(array)