function sumStrings(a, b) {
    const numA = a.split('');
    const numB = b.split('');
    const result = [];

    while (numA.length > numB.length) numB.unshift('0');
    while (numB.length > numA.length) numA.unshift('0');

    for (let i = numA.length - 1; i >= 0; i--) {

        if (Number(numA[i]) + Number(numB[i]) > 9) {
            result.push(String(Number(numA[i]) + Number(numB[i])).slice(-1));

            if (numA[i - 1] === undefined) {
                numA.unshift('0');
                numB.unshift('0');
                i++;
            }

            numA[i - 1] = String(Number(numA[i - 1]) + 1);

        } else result.push(String(Number(numA[i]) + Number(numB[i])));
        
    }

    result.reverse();

    for (let i = 0; i < result.length; i++) {
        if (result[i] > 0) break;
        result.shift();
        i--;
    }

    return result.join('');

}