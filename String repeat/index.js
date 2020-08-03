function repeatStr (n, s) {
    let repeatedString = "";
    while (n > 0) {
        repeatedString = repeatedString.concat(s);
        n--;
    }
    return repeatedString;
}