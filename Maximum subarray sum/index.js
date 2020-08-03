const maxSequence = arr => {
    let tempSum = 0;
    let maxSum = 0;

    for (const item of arr) {
        tempSum += item;
        maxSum = Math.max(maxSum, tempSum);
        if (tempSum < 0) tempSum = 0;
    }

    return maxSum;

}