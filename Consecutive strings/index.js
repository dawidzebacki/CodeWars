function longestConsec(strArr, k) {
    let longestStr = "";

    if (strArr.length === 0 || k > strArr.length || k <= 0) {
        return "";
    }

    for (let i = 0; i < strArr.length; i++) {
        let currentStr = strArr.slice(i, k + i).join('');
        if (currentStr.length > longestStr.length) {
            longestStr = currentStr;
        }
    }
    return longestStr;
}