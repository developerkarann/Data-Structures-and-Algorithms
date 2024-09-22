function checkAnagram(str1,str2){

    let ObjStr1 = {}

    if(str1.length !== str2.length) return false

    for(let char of str1){
        ObjStr1[char] = (ObjStr1[char] || 0) + 1;
    } 

    for(let char of str2){

        if(!ObjStr1[char]){
            return false
        }
        ObjStr1[char]--
    }
    return true
}

console.log(checkAnagram('hello', 'ehllo'))


