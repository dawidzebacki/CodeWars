function firstNonRepeatingLetter(s) {
    const splittedStr = s.split('');

    for (let i = 0; i <= splittedStr.length; i++) {
        let word = splittedStr.splice(i, 1).join('');

        if (!splittedStr.includes(word) && !splittedStr.includes(word.toLowerCase()) && !splittedStr.includes(word.toUpperCase())) {
            return word;
        } else {
            splittedStr.unshift(word);
        }
        
    }

    return false;

}