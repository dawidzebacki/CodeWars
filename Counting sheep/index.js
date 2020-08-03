function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(element => {
        if (element) count++;
    });
    return count;
}