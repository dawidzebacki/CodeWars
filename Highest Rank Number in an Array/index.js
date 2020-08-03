function highestRank(arr) {
    const obj = {};
    const objArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
        else obj[arr[i]] = 1;
    }

    for (const key in obj) {
        objArr.push([key, obj[key]]);
    }

    return Number(objArr
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .filter(element => {
            if (element[1] === objArr[0][1]) return element;
        })
        .sort((a, b) => {
            return Number(b[0]) - Number(a[0]);
        })
        [0][0]);

}