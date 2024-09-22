function checkPalindrome(data){

    let start = 0;
    let end = data.length - 1
    let result = false;

    while(end > start){
        if(data[end] === data[start]){
            result = true
        }
        start++
        end--
    }

    return result

}

console.log(checkPalindrome('level'))