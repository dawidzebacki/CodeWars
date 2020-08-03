function removeSmallest(numbers) {
    const arr = numbers.slice();
    return arr.slice(0, arr.indexOf(Math.min(...arr))).concat(arr.slice(arr.indexOf(Math.min(...arr)) + 1, arr.length));
}