function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return -1;
    }
  
    const minA1 = Math.min(...a1.map(element => element.length));
    const minA2 = Math.min(...a2.map(element => element.length));
  
    const maxA1 = Math.max(...a1.map(element => element.length));
    const maxA2 = Math.max(...a2.map(element => element.length));

    return maxA2 - minA1 >= maxA1 - minA2 ? maxA2 - minA1 : maxA1 - minA2;
}