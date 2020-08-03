function flattenAndSort(array) {
    return Array.prototype.concat.apply([], array).sort((a, b) => a - b);
}