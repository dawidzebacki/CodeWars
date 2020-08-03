function rot13(str) {
    const A = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    const B = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const rotStr = [];
    const splittedStr = str.split('');
    

    splittedStr.forEach(element => {
        if (A.indexOf(element) >= 0) rotStr.push(B[A.indexOf(element)]);
        else if (A.indexOf(element.toLowerCase()) >= 0) rotStr.push(B[A.indexOf(element.toLowerCase())].toUpperCase());
        else if (B.indexOf(element) >= 0) rotStr.push(A[B.indexOf(element)]);
        else if (B.indexOf(element.toLowerCase()) >= 0) rotStr.push(A[B.indexOf(element.toLowerCase())].toUpperCase());
        else rotStr.push(element);
    })

    return rotStr.join('');
}