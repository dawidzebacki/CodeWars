function dontGiveMeFive(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (String(i).includes('5')) continue;
        sum++;
    }

    return sum;
}