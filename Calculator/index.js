const Calculator = function () {
    this.evaluate = str => {

    str = str.replace(/\s/g, '').split('');

    let toCalculate = [];

    let bigNumber = false;
    let bigNumberIndex;

    for (let i = 0; i < str.length; i++) {

        if (Number(str[i]) === Number(str[i]) && !bigNumber) {
          
            bigNumberIndex = i;
            bigNumber = true;
          
        }

        if ((Number(str[i]) !== Number(str[i]) && bigNumber)) {
          
            toCalculate.push(Number(str.slice(bigNumberIndex, i).join('')));
            bigNumber = false;
          
        }

        if (str[i + 1] === undefined && bigNumber) {
          
            toCalculate.push(Number(str.slice(bigNumberIndex, i + 1).join('')));
          
        }

        if (Number(str[i]) !== Number(str[i])) {
          
            toCalculate.push(str[i]);
          
        }

    }

    while (!toCalculate.every(element => Number(element) === Number(element))) {

        for (let i = 0; i < toCalculate.length; i++) {
            if (toCalculate[i] === '/') {

                toCalculate[i] = toCalculate[i - 1] / toCalculate[i + 1];
                toCalculate[i - 1] = " ";
                toCalculate[i + 1] = " ";
                toCalculate = toCalculate.filter(str => /\S/.test(str));
                i--;

            } else if (toCalculate[i] === '*') {

                toCalculate[i] = toCalculate[i - 1] * toCalculate[i + 1];
                toCalculate[i - 1] = " ";
                toCalculate[i + 1] = " ";
                toCalculate = toCalculate.filter(str => /\S/.test(str));
                i--;

            }
        }

        for (let i = 0; i < toCalculate.length; i++) {
            if (toCalculate[i] === '+') {

                toCalculate[i] = toCalculate[i - 1] + toCalculate[i + 1];
                toCalculate[i - 1] = " ";
                toCalculate[i + 1] = " ";
                toCalculate = toCalculate.filter(str => /\S/.test(str));
                i--;

            } else if (toCalculate[i] === '-') {

                toCalculate[i] = toCalculate[i - 1] - toCalculate[i + 1];
                toCalculate[i - 1] = " ";
                toCalculate[i + 1] = " ";
                toCalculate = toCalculate.filter(str => /\S/.test(str));
                i--;

            }
        }
    }

    return toCalculate.reduce((acc, curr) => acc + curr);

    };
};