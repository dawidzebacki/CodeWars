function rowSumOddNumbers(n) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        count += i;
    }

    for (let i = count - n + 1 ; i <= count ; i++) {
        sum += (i * 2) - 1;
    }

    return sum;
    
}