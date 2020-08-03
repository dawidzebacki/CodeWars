function solve(s){  
    let prefix = "";
    for (let i = 0 ; i <= Math.floor(s.length / 2) ; i++) {
        if (s.slice(0, i) === s.slice(-i)) {
            prefix = s.slice(-i);
        }
    }
    return prefix.length;
}