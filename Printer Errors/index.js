function printerError(s) {
    let countBad = 0;
    const letters = "abcdefghijklm".split('');
    s.split('').forEach( element => {
        if (!letters.includes(element)) countBad++;
    })
    return `${countBad}/${s.length}`;
}