function biggestNum(a, b) {

    let numA = a.split('');
    let numB = b.split('');
    let minusA = 0;
    let minusB = 0;

    for (let i = 0; i < numA.length; i++) {
        if (numA[i] === '-' && numA[i + 1] === '-') {
            numA[i] = " ";
            minusA++;
        } else if (numA[i] === '-' && minusA % 2 === 1) {
            numA[i] = " ";
        }
        if (numA[i] === '0') numA[i] = " ";
        if (numA[i] !== '0' && numA[i] !== '-' && numA[i] !== ' ') break;
    }

    for (let i = 0; i < numB.length; i++) {
        if (numB[i] === '-' && numB[i + 1] === '-') {
            numB[i] = " ";
            minusB++;
        } else if (numB[i] === '-' && minusB % 2 === 1) {
            numB[i] = " ";
        }
        if (numB[i] === '0') numB[i] = " ";
        if (numB[i] !== '0' && numB[i] !== '-' && numB[i] !== ' ') break;
    }

    numA = numA.join('').replace(/\s/g, "");
    numB = numB.join('').replace(/\s/g, "");

    if (numA[0] === '-' && numB[0] === '-') {
        if (numA.length < numB.length) return numA;
        else if (numB.length < numA.length) return numB;
        else {
            for (let i = 0; i < numA.length; i++) {
                if (Number(numA[i]) < Number(numB[i])) return numA;
                else if (Number(numA[i]) > Number(numB[i])) return numB;
            }
            return numA;
        }

    }
    else if (numA[0] === '-' && numB[0] !== '-') return numB;
    else if (numB[0] === '-' && numA[0] !== '-') return numA;
    else if (numA.length > numB.length) return numA;
    else if (numB.length > numA.length) return numB;
    else {
        for (let i = 0; i < numA.length; i++) {
            if (Number(numA[i]) > Number(numB[i])) return numA;
            else if (Number(numA[i]) < Number(numB[i])) return numB;
        }
        return numA;
    }

}