function solution(str) {
  
    const letters = [];
    const splittedStr = str.split('');
  
    for (let i = 0; i < splittedStr.length; i+=2) {

        if (splittedStr[i + 1] === undefined) {
            letters.push(splittedStr[i].concat("_"));
        } else {
            letters.push(splittedStr[i].concat(splittedStr[i + 1]));
        }

    }

    return letters;
}