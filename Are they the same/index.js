function comp(array1, array2) {
        return array1 && array2 ? array1.map(element => element * element).sort().join('') === array2.sort().join('') : false;
}