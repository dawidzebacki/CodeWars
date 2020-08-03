function squareSum(numbers) {
    return numbers.map(element => element * element).reduce((prev, curr) => prev + curr, 0);
}