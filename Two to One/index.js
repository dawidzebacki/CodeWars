function longest(s1, s2) {
    return [...new Set(s1.split('').concat(s2.split('')))].sort().join('');
}