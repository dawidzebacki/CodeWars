function SeriesSum(n) {
    let sum = 0;
    let j = 1;
    for (let i = 0; i < n; i++) {
        sum += 1 / j;
        j += 3;
    }
    return sum.toPrecision(3);
}