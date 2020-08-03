function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const str = string.split('').map(element => element.toLowerCase());

    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return false;
        }
    }

    return true;
}