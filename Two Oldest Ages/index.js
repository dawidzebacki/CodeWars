function twoOldestAges(ages) {
    const second = Math.max(...ages);
    ages.splice(ages.indexOf(Math.max(...ages)), 1);
    const first = Math.max(...ages);

    return [first, second];
}