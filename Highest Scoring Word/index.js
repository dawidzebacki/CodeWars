function high(x) {
    const scores = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    }
    const itemScores = {};

    const text = x.split(' ');
    text.forEach(element => {
        itemScores[element] = 0;
    });

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text[i].length; j++) {
            itemScores[text[i]] += scores[text[i][j]];
        }
    }

    return Object.keys(itemScores).reduce((a, b) => itemScores[a] > itemScores[b] ? a : b);
}