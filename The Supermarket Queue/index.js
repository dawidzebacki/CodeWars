function queueTime(line, registers) {
    const arr = [];

    for (let i = 0; i < registers; i++) {
        arr.push(0);
    }

    for (let j = 0; j < line.length; j++) {
        arr[0] += line[j];

        arr.sort(function (a, b) {
            return a - b;
        });
    }

    return arr[arr.length - 1];
}