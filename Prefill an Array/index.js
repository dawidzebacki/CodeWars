function prefill(n, v) {

    if ((typeof n === 'string' && n !== '0') ||
        (n !== parseInt(n) && n !== '0') ||
        n === -Infinity ||
        n === Infinity ||
        n === false ||
        n === true ||
        n === NaN ||
        n < 0) throw new TypeError(`${n} is invalid`);

    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(v);
    }

    return arr;

}