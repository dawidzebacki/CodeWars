function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'X' || str[i] === 'x') {
            x++;
        }
        if (str[i] === 'O' || str[i] === 'o') {
            o++;
        }
    }
    return x === o;
}