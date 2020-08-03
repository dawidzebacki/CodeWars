function reverseWords(str) {
    const reversed = [];
    const splittedStr = str.split(' ')

    for (let i = 0; i < splittedStr.length; i++) {
        reversed.push(splittedStr[i].split('').reverse().join(''))
    }
    return reversed.join(' ')
}