function diamond(n) {  
  
    if ( n <= 0 || n % 2 === 0 ) return null;

    let diam = "";
    let nLength = n;

    for (let i = 1; i <= n; i += 2) {
        diam = diam + " ".repeat(Math.floor(nLength/2)) + "*".repeat(i) + "\n";
        nLength -= 2;
    }

    nLength = 3;

    for (let i = n - 2; i > 0; i -= 2) {
        diam = diam + " ".repeat(Math.floor(nLength/2)) + "*".repeat(i) + "\n";
        nLength += 2;
    }

    return diam;
  
}