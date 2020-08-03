function isValidIP(str) {

    if (
        str.split('.').length !== 4 ||
        str.split('').includes(' ') ||
        str.split('').includes('\n')) return false;

    str = str.split('.');

    for (let i = 0; i < str.length; i++) {

        if (str[i].length > 1 &&
            str[i][0] === "0" ||
            str[i].length === 0) return false;

        if (Number(str[i]) < 0 ||
            Number(str[i]) > 255) return false;

        for (let j = 0; j < str[i].length; j++) {

            if (isNaN(Number(str[i][j]))) return false;

        }

    }

    return true;
    
}