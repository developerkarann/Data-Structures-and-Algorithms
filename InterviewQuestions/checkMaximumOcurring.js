function checkMaximumOcurring(str) {

    let strObj = {};
    let maximumKey = '';

    for (let i = 0; i < str.length; i++) {
        let key = str[i];

        if (!strObj[key]) {
            strObj[key] = 0
        }
        strObj[key]++

        if (maximumKey == '' || strObj[key] > strObj[maximumKey]) {
            maximumKey = key
        }
    }

    return maximumKey

}

console.log(checkMaximumOcurring('hello suneeyo'))