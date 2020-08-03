const lastDigit = function (str1, str2) {
    str2 = str2.slice(-2);
    const base = str1.slice(-1);
    const power = ((str2 - 2) % 4) + 10;

    if (str2 === "0") {
        return 1;
    } else {
        return Number(String(Math.pow(base, power)).slice(-1));
    }
}