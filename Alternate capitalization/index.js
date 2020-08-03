function capitalize(s) {
    let first = "";
    let second = "";

    for (let i = 0; i < s.split('').length; i++) {
        if ((i + 1) % 2 === 0) {
            second += s[i].toUpperCase();
            first += s[i];
        } else {
            first += s[i].toUpperCase();
            second += s[i];
        }
    }

    return [first, second];
};