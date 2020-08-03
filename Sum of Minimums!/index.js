function sumOfMinimums(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += Math.min(...arr[i]);
    }

    return count;
}