const isPP = function (n) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (Math.pow(Number.parseFloat(Math.pow(n, 1 / i).toPrecision(5)), i) === n) return [Number.parseFloat(Math.pow(n, 1 / i).toPrecision(5)), i];
    }
    return null;
}