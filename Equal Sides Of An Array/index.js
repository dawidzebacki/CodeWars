function findEvenIndex(arr) {
    let sum = 0;
    let leftSum = 0;

    sum = arr.reduce((prev, curr) => prev + curr);

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}