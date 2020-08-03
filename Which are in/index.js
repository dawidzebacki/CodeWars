function inArray(array1, array2) {

    const matchArr = [];

    for (let k = 0; k < array1.length; k++) {

        for (let i = 0; i < array2.length; i++) {

            for (let j = 0; j < array2[i].length; j++) {

                if (array1[k] === undefined) {
                    k++;
                    i = 0;
                    j = 0;
                }

                if (array1[k] === array2[i].slice(j, array1[k].length + j)) matchArr.push(array1[k]);

            }
        }
    }

    return [... new Set(matchArr)].sort();

}