var encryptThis = function (text) {
    const splittedStr = text.split(' ');
    const arr = [];

    for (let i = 0; i < splittedStr.length; i++) {

        const code = splittedStr[i].charCodeAt(0);
        let restOfText = splittedStr[i][splittedStr[i].length - 1];

        if (splittedStr[i].length === 1) {
            arr.push(code);
            continue;
        } else if (splittedStr[i].length === 2) {
            arr.push(code + restOfText);
            continue;
        } else {
            for (let j = 2; j < splittedStr[i].length - 1; j++) {
                restOfText += splittedStr[i][j];
            }
            arr.push(code + restOfText + splittedStr[i][1]);
        }


    }

    return arr.join(' ');
}