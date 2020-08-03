function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const splittedStr = str.split('');
    const noVowelString = [];
    let isVowel;

    for (let i = 0; i < splittedStr.length; i++) {
        isVowel = false;
        for (let j = 0; j < vowels.length; j++) {
            if (splittedStr[i] === vowels[j]) {
                isVowel = true;
            }
        }
        if (!isVowel) {
            noVowelString.push(splittedStr[i]);
        }
    }

    return noVowelString.join('');
}