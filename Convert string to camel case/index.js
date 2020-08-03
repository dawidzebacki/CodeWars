function toCamelCase(str) {
    let splittedStr = str.split('');
    let camelCase = [];
    for (let i = 0; i < splittedStr.length; i++) {
        if (splittedStr[i] === "_" || splittedStr[i] === "-") {
            camelCase.push(splittedStr[i + 1].toUpperCase());
            i++;
        } else {
            camelCase.push(splittedStr[i]);
        }
    }
    return camelCase.join('');
}