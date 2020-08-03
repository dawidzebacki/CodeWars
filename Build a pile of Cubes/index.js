function findNb(m) {
    let n = 0;
    for (let i = 1; m > 0; i++) {

        m = m - Math.pow((n + 1), 3);
        
        if (m === 0) {
            return i;
        } else if (m < 0) return -1;

        n++;
    }
}