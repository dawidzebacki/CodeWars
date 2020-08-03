function maskify(cc) {
    const arr = [];
    cc = cc.split('');
    for (let i = 0; i < cc.length; i++) {
        if ( i >= cc.length - 4) {
            arr.push(cc[i]);
        } else {
            arr.push("#");
        }
    }
    return arr.join('');
}