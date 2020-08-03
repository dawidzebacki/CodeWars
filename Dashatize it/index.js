function dashatize(num) {
    if (!num || String(Math.abs(num)).length === 1) return String(Math.abs(num));

    let numStr = String(Math.abs(num));
    let numSplit = numStr.split("");

    let newArr = [];

    for (let i = 0; i < numSplit.length; i++) {
        let number = parseInt(numSplit[i]);

        if (i === numSplit.length - 1) {
            if (number % 2 === 0) {
                newArr.push(number);
            } else {
                newArr.push("-", number);
            }
        }

        else if (i === 0) {
            if (number % 2 === 0) {
                newArr.push(number);
            } else {
                newArr.push(number, "-");
            }
        }

        else if (number % 2 != 0) {
            newArr.push("-" + number + "-");
        }
        
        else {
            newArr.push(number);
        }
    }

    return newArr.join("").replace(/--/g, '-');
}