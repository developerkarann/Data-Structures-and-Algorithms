let data = [10,20,30,40,50,60,70,80]

let findNum = 60;

let index = undefined;

for(let i = 0; i < data.length; i++){
    if (data[i] === findNum) {
        index = i;
        break
    }
}
console.log(index)