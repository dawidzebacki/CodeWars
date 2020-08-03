function getSum(a, b) {
    let sum = 0;
    if (a === b) return a;
    else if (a > b) {
        while (a >= b) {
            sum += a;
            a--;

        }
    } else {
        while (b >= a) {
            sum += b;
            b--;

        }
    }
    return sum;
}