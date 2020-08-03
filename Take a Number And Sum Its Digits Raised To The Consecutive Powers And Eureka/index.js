function sumDigPow(a, b) {

    const arr = [];

    for (let i = a; i < b; i++) {

        let temp = 0;

        for (let j = 1; j < String(i).split('').length + 1; j++) {

            if (i < 10) arr.push(i);

            if (i > 10) {
                temp += Math.pow(String(i).split('')[j - 1], j);
            }

        }

        if (temp === i) arr.push(temp);

    }
    
    return arr;
}